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
        baseUrl: 'https://login.softdocsdev.cloud',
        clientId: 'af19eb4a-0f2a-4de6-8f08-620ca3ac673c'
      },
      hostedLoginBox: true,
      authOptions: { keepSessionAlive: true }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
