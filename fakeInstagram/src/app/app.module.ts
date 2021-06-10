import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

// Forms module
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { PostsComponent } from './components/feed/posts/posts.component';
import { UserInfoComponent } from './components/feed/user-info/user-info.component';
import { LoginFormComponent } from './components/login/login-form.component';
import { RegisterFormComponent } from './components/register/register-form.component';
import { NavbarComponent } from './components/shared/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';
import { ProfileInfoComponent } from './components/profile/profile-info/profile-info.component';
import { ProfilePhotosComponent } from './components/profile/photos/profile-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserInfoComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    FeedComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfilePhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
