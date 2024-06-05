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
      redirect_uri: `${window.location.origin}/dialog`
    });
  }
}
