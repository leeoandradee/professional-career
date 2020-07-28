import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwotComponent } from './swot/swot.component';
import { ProfileComponent } from './profile/profile.component';
import { StudyFormationComponent } from './study-formation/study-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    SwotComponent,
    ProfileComponent,
    StudyFormationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
