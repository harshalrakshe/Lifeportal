import { Component, OnInit, TemplateRef,AfterViewInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, } from '@angular/material/dialog';

@Component({
  selector: 'app-mothers-details',
  templateUrl: './mothers-details.component.html',
  styleUrls: ['./mothers-details.component.scss']
})
export class MothersDetailsComponent implements OnInit, AfterViewInit {
  

  constructor( 
       public dialog:MatDialog,
  ) {

  }
@ Input() item=0;
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
