import { Routes } from "@angular/router";

// import { AnalyticsComponent } from "./analytics/analytics.component";
import { BregistrationComponent } from "./bregistration/bregistration.component";
export const DashboardRoutes: Routes = [
  // {
  //   path: "analytics",
  //   component: AnalyticsComponent,
  //   data: { title: 'Analytics', breadcrumb: 'Analytics'}
  // },

{
  path:"bregistration",
  component:BregistrationComponent,
  data: { title: 'bregistration', breadcrumb: 'bregistraion'}

}
];
