import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from "ngx-echarts";
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from "app/shared/shared-material.module";
import { SharedPipesModule } from "app/shared/pipes/shared-pipes.module";
import { MothersDetailsComponent } from './mothers-details/mothers-details.component';
import { CommanPanelRouting } from './comman-panel-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BabysDetailsComponent } from './babys-details/babys-details.component';


@NgModule({
  declarations: [
    MothersDetailsComponent,
    BabysDetailsComponent
  ],

  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedMaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    SharedPipesModule,
    RouterModule.forChild(CommanPanelRouting),
  ]
})

export class CommanPanelModule { }
