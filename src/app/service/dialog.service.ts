import { Injectable } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { DialogCustomComponent } from '../components/dialog-custom/dialog-custom.component';
import { DialogCustomData } from '../models/dialog-custom-data.model';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
//private matDialog: MatDialog
  constructor(public matDialog: MatDialog) { }

  /*
  openDialogCustom() {
    this.matDialog.open(DialogCustomComponent);
  }
  */


  openDialogCustom(data: DialogCustomData) {
    this.matDialog.open(DialogCustomComponent, {data});
  }




}
