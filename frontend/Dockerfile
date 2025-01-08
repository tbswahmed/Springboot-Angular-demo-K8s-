# Build stage
FROM node:14.15.3-alpine as node
WORKDIR /app
COPY package.json /app/
RUN npm install -f
COPY . /app/

# Modify the env.sh script to include debug output
RUN echo '#!/bin/sh' > /app/env.sh && \
    echo 'echo "Creating env.js with BASEURL=$BASEURL and PORT=$PORT"' >> /app/env.sh && \
    echo 'envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js' >> /app/env.sh && \
    echo 'cat /usr/share/nginx/html/assets/env.js' >> /app/env.sh && \
    chmod +x /app/env.sh

RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=node /app/dist/* /usr/share/nginx/html/
COPY --from=node /app/env.sh /docker-entrypoint.d/

# Create assets directory and env.template.js
RUN mkdir -p /usr/share/nginx/html/assets && \ 
    echo "window.env = { \
    BASEURL: '\${BASEURL}', \
    PORT: '\${PORT}' \
    };" > /usr/share/nginx/html/assets/env.template.js

# This section will is added to load the env vars at runtime so the baseurl and port will be dynamic !

# Install envsubst utility
RUN apk add --no-cache gettext

# Set default values
ENV BASEURL=http://localhost
ENV PORT=8080

EXPOSE 80
CMD ["/bin/sh", "-c", "/docker-entrypoint.d/env.sh && nginx -g 'daemon off;'"]