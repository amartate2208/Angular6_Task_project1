import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppComponent } from './app.component';
import { UserProfileCreateComponent } from './user-profile-create/user-profile-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Add ReactiveFormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 

