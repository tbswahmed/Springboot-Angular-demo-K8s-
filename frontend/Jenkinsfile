pipeline {
   agent any
   stages {
    stage('Checkout') {
      steps {
        script {
           git branch: 'ahmedtyb', 
           url: 'https://github.com/tbswahmed/LCProject.git'
          }
       }
    }
    stage('Build') {
      steps {
        script {
           sh 'ansible-playbook ansible/build.yml -i ansible/inventory/hosts.yml'
          }
       }
    }
  }
}
