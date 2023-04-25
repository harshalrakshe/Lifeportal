import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-pregitration",
  templateUrl: "./pregitration.component.html",
  styleUrls: ["./pregitration.component.scss"],
})
export class PregitrationComponent implements OnInit, AfterViewInit {
  constructor(public dialog: MatDialog) {}
  @Input() item = 0;
  ngOnInit(): void {}

  openDialog(dialogName: TemplateRef<any>): void {
    this.dialog.open(dialogName, {
      width: "750px",
    });
  }

  ngAfterViewInit(): void {}
}
