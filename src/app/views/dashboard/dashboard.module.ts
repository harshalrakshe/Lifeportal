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
    MatDialogModule,
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
  declarations: [
    // AnalyticsComponent,
     BregistrationComponent],
  exports: [MatDialogModule],
})
export class DashboardModule {}
