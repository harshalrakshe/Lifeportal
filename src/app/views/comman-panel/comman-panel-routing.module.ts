import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MothersDetailsComponent } from './mothers-details/mothers-details.component';
import { BabysDetailsComponent } from './babys-details/babys-details.component';
export const CommanPanelRouting: Routes = [

  {
    path: "mothersdetails",
    component: MothersDetailsComponent,
    data: { title: 'Analytics', breadcrumb: 'Analytics'}
  },
  {
    path: "babysdetails",
    component: BabysDetailsComponent,
    data: { title: 'Analytics', breadcrumb: 'Analytics'}
  },


];
