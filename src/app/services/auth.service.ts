import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FronteggAuthService } from '@frontegg/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private fronteggAuthService: FronteggAuthService,
    private router: Router
  ) {}

  /**
   * Initiate login with redirection
   */
  public loginWithRedirect(): void {
    this.fronteggAuthService.loginWithRedirect({
      tenantId: '11556d0a-a913-49aa-b111-ddb4fa2e8a8f',
      organization: 'softdocsai',
      prompt: 'login',
      redirect_uri: `${window.location.origin}/dialog`
    });
  }
}
