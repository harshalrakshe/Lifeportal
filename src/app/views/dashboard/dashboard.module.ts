import { SharedMaterialModule } from "app/shared/shared-material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgChartsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";
import { DashboardRoutes } from "./dashboard.routing";
// import { AnalyticsComponent } from "./analytics/analytics.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BregistrationComponent } from './bregistration/bregistration.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    NgChartsModule,

    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SharedPipesModule,
    RouterModule.forChild(DashboardRoutes),
  ],
<<<<<<< HEAD
  declarations: [
    // AnalyticsComponent,
     BregistrationComponent],
  exports: [MatDialogModule],
=======
  declarations: [AnalyticsComponent],
  exports: [],
>>>>>>> 3ac637bb7079593db8495a8e78f4908925905d88
})
export class DashboardModule {}
