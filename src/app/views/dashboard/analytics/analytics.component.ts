import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy, TemplateRef
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  // animations: matxAnimations
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  constructor(
    public dialog: MatDialog,
  ){

  }

  ngOnInit(): void {
    
  }


  openDialog(dialogName: TemplateRef<any>): void {
    this.dialog.open(dialogName, {
      width: '750px'
    });
  }

  ngAfterViewInit(): void {
    
  }
  
}
