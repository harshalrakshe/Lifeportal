import { Component, OnInit ,TemplateRef} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bregistration',
  templateUrl: './bregistration.component.html',
  styleUrls: ['./bregistration.component.scss']
})
export class BregistrationComponent implements OnInit {

  constructor(
    public dialog:MatDialog
  ) { 

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
