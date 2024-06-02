import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AlgoritmoRoutingModule } from './algoritmo-routing.module';
import {AlgoritmoComponent } from './algoritmo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule } from '@angular/material/card';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';

import { DialogCustomComponent } from 'src/app/components/dialog-custom/dialog-custom.component';
import { DialogService } from 'src/app/service/dialog.service';

import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AlgoritmoComponent,
    DialogCustomComponent
  ],
  imports: [
    CommonModule,
    AlgoritmoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatDialogModule,

  ]
  //providers:[DialogService]
})
export class AlgoritmoModule {}

