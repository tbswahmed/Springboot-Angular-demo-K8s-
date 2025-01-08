import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private window = (window as any);

  get baseUrl(): string {
    return this.window.env?.BASEURL || 'http://localhost';
  }

  get port(): string {
    return this.window.env?.PORT || '8080';
  }
}