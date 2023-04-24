import { Component, OnInit,TemplateRef,AfterViewInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-babys-details',
  templateUrl: './babys-details.component.html',
  styleUrls: ['./babys-details.component.scss']
})
export class BabysDetailsComponent implements OnInit,AfterViewInit{

  constructor(
    public dialog:MatDialog
  ) { }

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
