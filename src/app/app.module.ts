import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyAooNmUZKQfqEc9CwqWoWuNSBi_CRIMRCA',
  authDomain: 'siad-5ccce.firebaseapp.com',
  databaseURL: 'https://siad-5ccce.firebaseio.com',
  storageBucket: 'siad-5ccce.appspot.com',
  messagingSenderId: '552808913035'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


