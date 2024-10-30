import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { provideHttpClient } from '@angular/common/http';
import { GuideComponent } from './pages/guide/guide.component';
import { AllianceMilestonesComponent } from './pages/alliance-milestones/alliance-milestones.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { GuideSeasonsComponent } from './pages/guide/guide-seasons/guide-seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    GuideComponent,
    AllianceMilestonesComponent,
    GuideSeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
