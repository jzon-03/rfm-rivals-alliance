import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { GuideComponent } from './pages/guide/guide.component';
import { AllianceMilestonesComponent } from './pages/alliance-milestones/alliance-milestones.component';
import { AdminComponent } from './admin/admin.component';
import { ClapBackComponent } from './clap-back/clap-back.component';
import { ProteinCalculatorComponent } from './protein-calculator/protein-calculator.component';

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
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'proteincalculator', component: ProteinCalculatorComponent
  },
  {
    path: 'clapbackgpt', component: ClapBackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
