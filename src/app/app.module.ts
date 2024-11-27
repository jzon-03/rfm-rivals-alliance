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
import { AdminComponent } from './admin/admin.component';
import { ClapBackComponent } from './clap-back/clap-back.component';
import { ProteinCalculatorComponent } from './protein-calculator/protein-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    GuideComponent,
    AllianceMilestonesComponent,
    GuideSeasonsComponent,
    AdminComponent,
    ClapBackComponent,
    ProteinCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
