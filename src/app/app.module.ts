import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FronteggAppModule } from '@frontegg/angular';
import { LoginComponent } from './components/login/login.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, DialogComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FronteggAppModule.forRoot({
      contextOptions: {
        baseUrl: 'YOUR FRONTEGG BASE_URL HERE',
        clientId: 'YOUR FRONTEGG CLIENT ID HERE'
      },
      hostedLoginBox: true,
      authOptions: { keepSessionAlive: true }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
