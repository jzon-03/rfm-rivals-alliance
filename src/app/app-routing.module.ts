import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { GuideComponent } from './pages/guide/guide.component';
import { AllianceMilestonesComponent } from './pages/alliance-milestones/alliance-milestones.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'rfm', pathMatch: 'full'
  },
  {
    path: 'rfm', component: MembersComponent
  },
  {
    path: 'guide', component: GuideComponent
  },
  {
    path: 'milestones', component: AllianceMilestonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
