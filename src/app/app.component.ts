import { Component } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hypertension';

  constructor(private dialogService: DialogService) {}

  openDialogCustom() {
    //this.dialogService.openDialogCustom()
  }

}

