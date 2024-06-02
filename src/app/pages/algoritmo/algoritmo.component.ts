import { ViewportScroller } from '@angular/common';
//import { Component, Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import {MatDialog } from '@angular/material/dialog';
import { DialogCustomComponent } from 'src/app/components/dialog-custom/dialog-custom.component';
import { DialogCustomData } from 'src/app/models/dialog-custom-data.model';



@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css'],
})


//implements OnInit
export class AlgoritmoComponent {

  value1 = 0
  value2 = 0
  value3 = 0
  principal=true;
  principal2=false;
  control=false;
  mostrarTarjeta = false;
  mostrarTarjeta0 = false;
  mostrarTarjeta2 = false;
  mostrarTarjeta3 = false;
  mostrarTarjeta4 = false;
  mostrarTarjeta5 = false;
  mostrarTarjeta6 = false;
  mostrarTarjeta7 = false;
  mostrarTarjeta8 = false;
  mostrarTarjeta9 = false;
  mostrarTarjeta10 = false;
  mostrarTarjeta11 = false;
  mostrarTarjeta12 = false;
  mostrarTarjeta13 = false;
  mostrarTarjeta14 = false;
  mostrarTarjeta15 = false;
  mostrarTarjeta16 = false;
  mostrarTarjeta111 = false;
  mostrarTarjeta112 = false;
  mostrarTarjeta113 = false;

  ocultarp = true;
  ocultar0p = true;
  ocultar = true;
  ocultar0 = true;
  ocultar1 = true;
  ocultar2 = true;
  ocultar3 = true;
  ocultar4 = true;
  ocultar5 = true;
  ocultar6 = true;
  ocultar7 = true;
  ocultar8 = true;
  ocultar9 = true;
  ocultar10 = true;
  ocultar11 = true;
  ocultar12 = true;
  ocultar13= true;
  ocultar14 = true;
  ocultar15 = true;
  ocultar16 = true;
  ocultar17 = true;
  ocultar18 = true;


  //constructor() {}

  constructor(private dialogService: DialogService) {}
  //constructor(public matDialog: MatDialog) { }
  /*
  ngOnInit() {
    // Asignar la propiedad `principalElement` con la referencia al elemento con la clase `.principal`
  }
  */


  openDialogRecomendaciones() {
    //this.dialogService.openDialogCustom()
    //this.matDialog.open(DialogCustomComponent);
    this.dialogService.openDialogCustom({
      title: 'Recomendaciones no farmacológicas',
      content: ['Actividad física de la preferencia del paciente: Moderada intensidad 130 minutos por semana o Alta intensidad 75 minutos por semana',
               'Reducción de consumo de sodio en la dieta (procesados, enlatados, conservantes, panadería industrial)',
               'Dieta DASH: Consumo de verduras, frutas, granos enteros, proteínas magras',
               'Control del peso.',
               'Cese del tabaquismo.',
               'Reducción del consumo de bebidas alcohólicas']
    })
  }


  openDialogOpcion1() {
    this.dialogService.openDialogCustom({
      title: 'I.10 INICIO ARB-CCB CON LA MITAD DE LA DOSIS UNA VEZ AL DÍA (una sola píldora)',
      content: ['1.UN ÚNICO COMPIMIDO',
      'Amlodipino - Olmesartán: 5 mg/20 mg',
      'Amlodipino - Valsartán: 5 mg/160 mg',
      'Amlodipino - Telmisartan: 5 mg/ 40 mg',
      'Amlodipino - Candesartán: 5 mg/16 mg',
      'Amlodipino - Losartán: 5 mg / 50 mg',
      '-----------------',
      '2.COMPRIMIDOS INDIVIDUALES',
      'Tableta de Amlodipino: 5mg + Tableta de Irbesartán: 150 mg',
      'Tableta de Amlodipino: 5mg + Tableta de Olmesartán: 20 mg',
      'Tableta de Amlodipino: 5mg + Tableta de Valsartán: 160 mg',
      'Tableta de Amlodipino: 5mg + Tableta de Telmisartan: 40 mg',
      'Tableta de Amlodipino: 5mg + Tableta de Candesartán: 16 mg',
      'Tableta de Amlodipino: 5mg + Tableta de Losartán: 50 mg']
    })
  }

  openDialogOpcion2() {
    this.dialogService.openDialogCustom({
      title: 'R 20, 21  AUMENTE EL ARB-CCN (una sola píldora)',
      content: ['Amlodipino - Olmesartán: 10 mg/40 mg',
      'Amlodipino - Valsartán: 10 mg/320 mg',
      'Amlodipino - Telmisartán: 10 mg/80 mg',
      'Amlodipino – Irbesartán: 10 mg/300 mg',
      '-----------------',
      'OTRAS PRESENTACIONES',
      'Amlodipino - Candesartán: 5 mg/32 mg',
      'Amlodipino – Losartán: 5 mg/100 mg']
    })
  }

  openDialogOpcion3() {
    this.dialogService.openDialogCustom({
      title: 'AA. 28 AGREGE TIAZIDAS/DIURÉTICOS TIAZÍDICOS A LA MITAD DE LA DOSIS MAXIMA',
      content: ['1.UN ÚNICO COMPRIMIDO',
      'Amlodipino - Valsartán - Hidroclorotiazida: 10 mg/ 320 mg /12,5 mg',
      'Amlodipino - Candesartán - Hidroclorotiazida:  10 mg/32 mg /12,5 mg',
      '2.OTRAS PRESENTACIONES',
      'Tableta de Amlodipino - Olmesartán: 10 mg/40 mg + Tableta de Hidroclorotiazida: 12,5 mg',
      'Tableta de Amlodipino – Telmisartán: 10 mg/80 mg + Tableta de Hidroclorotiazida: 12,5 mg',
      'Tableta de Amlodipino – Irbesartá: 10 mg/300 mg + Tableta de Hidroclorotiazida: 12,5 mg',
      'Tableta de Amlodipino – Losartán: 10 mg/100 mg + Tableta de Hidroclorotiazida: 12,5 mg']
    })
  }


  openDialogOpcion4() {
    this.dialogService.openDialogCustom({
      title: 'AI. 35, 36 AUMENTE LA DOSIS DE TIAZIDAS/DIURÉTICOS TIAZÍDICOS A DOSIS PLENA',
      content: ['Tableta de Amlodipino - Olmesartán: 10 mg/40 mg + Tableta de Hidroclorotiazida: 25 mg',
      'Tableta de Amlodipino – Telmisartán: 10mg/80 mg + Tableta de Hidroclorotiazida: 25 mg',
      'Tableta de Amlodipino – Irbesartá: 10 mg/300 mg + Tableta de Hidroclorotiazida: 25 mg',
      'Tableta de Amlodipino – Losartán: 10 mg/100 mg + Tableta de Hidroclorotiazida: 25 mg']
    })
  }



  /*
  openDialogCustom(data: DialogCustomData) {
    this.matDialog.open(DialogCustomComponent, {data});
  }
  */







  recargar() {
  this.principal = true;
  this.principal2 = false;
  this.control = false;
  this.mostrarTarjeta = false;
  this.mostrarTarjeta0 = false;
  this.mostrarTarjeta2 = false;
  this.mostrarTarjeta3 = false;
  this.mostrarTarjeta4 = false;
  this.mostrarTarjeta5 = false;
  this.mostrarTarjeta6 = false;
  this.mostrarTarjeta7 = false;
  this.mostrarTarjeta8 = false;
  this.mostrarTarjeta9 = false;
  this.mostrarTarjeta10 = false;
  this.mostrarTarjeta11 = false;
  this.mostrarTarjeta12 = false;
  this.mostrarTarjeta13 = false;
  this.mostrarTarjeta14 = false;
  this.mostrarTarjeta15 = false;
  this.mostrarTarjeta16 = false;
  this.mostrarTarjeta111 = false;
  this.mostrarTarjeta112 = false;
  this.mostrarTarjeta113 = false;

  this.ocultar = true;
  this.ocultar0 = true;
  this.ocultar1 = true;
  this.ocultar2 = true;
  this.ocultar3 = true;
  this.ocultar4 = true;
  this.ocultar5 = true;
  this.ocultar6 = true;
  this.ocultar7 = true;
  this.ocultar8 = true;
  this.ocultar9 = true;
  this.ocultar10 = true;
  this.ocultar11 = true;
  this.ocultar12 = true;
  this.ocultar13= true;
  this.ocultar14 = true;
  this.ocultar15 = true;
  this.ocultar16 = true;
  this.ocultar17 = true;
  this.ocultar18 = true;
  }

 //botones del militus

q0si(): void {
  this.principal = false;
  this.principal2 = true;
  this.ocultar = false;
  this.ocultar0 = false;
  this.value3 = 1
}


q0sis(): void {
  this.principal = false;
  this.principal2 = true;
  this.ocultar = false;
  this.ocultar0 = false;
  this.value3 = 2
}

// botones control

controlsi(): void {
  this.control = true;
  this.principal2 = false;
  this.ocultar = false;
  this.ocultar0 = false;

}


pmsi(): void {
  this.mostrarTarjeta0 = true;
  this.principal2 = false;
  this.ocultar = false;
  this.ocultar0 = false;

}

//boton primera vez

guardar(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    const value3 = this.value3;
    if(value3 == 1){
      if (this.value1 >= 130 || this.value2 >= 85) {
        // Mostrar una tarjeta
        this.mostrarTarjeta = true;
        this.mostrarTarjeta0 = false;
      }else{
        this.mostrarTarjeta111 = true;
        this.mostrarTarjeta0 = false;
      }
    }else{
      if (this.value1 >= 140 || this.value2 >= 90) {
        // Mostrar una tarjeta
        this.mostrarTarjeta = true;
        this.mostrarTarjeta0 = false;
      }else{
        this.mostrarTarjeta111 = true;
        this.mostrarTarjeta0 = false;
      }
    }
  }

  q1si(): void {
      this.mostrarTarjeta2 = true;
      this.mostrarTarjeta = false;
      this.ocultar1 = false;
      this.ocultar2 = false;

  }

  q0no(): void {
    this.mostrarTarjeta111 = true
    this.mostrarTarjeta = false;
    this.mostrarTarjeta5 = false;
    this.mostrarTarjeta8 = false;
    this.ocultar3 = false;
    this.ocultar4 = false;
    this.ocultar5 = false;
    this.ocultar6 = false;
    this.ocultar7 = false;
    this.ocultar8 = false;
    this.ocultar9 = false;
    this.ocultar10 = false;
    this.ocultar11 = false;
    this.ocultar12 = false;
    this.ocultar13 = false;
    this.ocultar14 = false;
    this.ocultar15 = false;
    this.ocultar16 = false;
    this.ocultar17 = false;
    this.ocultar18 = false;
    this.ocultar = false;
    this.ocultar0 = false;
    this.ocultar1 = false;
    this.ocultar2 = false;
  }

  //tipo control 1

  q3si(): void {
    this.control = false;
    this.mostrarTarjeta4 = true;
    this.ocultar5= false;
    this.ocultar6 = false;
  }

  guardar2(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    const value3 = this.value3;

    if(value3 == 1){
      if (this.value1 >= 130 || this.value2 >= 85) {
        // Mostrar una tarjeta
        this.mostrarTarjeta5 = true;
        this.mostrarTarjeta4 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta4 = false;
      }
    }else{
      if (this.value1 >= 140 || this.value2 >= 90) {
        // Mostrar una tarjeta
        this.mostrarTarjeta5 = true;
        this.mostrarTarjeta4 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta4 = false;
      }
    }

  }


  q4si(): void {
    this.mostrarTarjeta5 = false;
    this.mostrarTarjeta6 = true;
    this.ocultar7 = false;
    this.ocultar8 = false;
  }

  //control2

  q5si(): void {
    this.control = false;
    this.mostrarTarjeta7 = true;
    this.ocultar9 = false;
    this.ocultar10 = false;
  }

  guardar3(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    const value3 = this.value3;

    if(value3 == 1){
      if (this.value1 >= 130 || this.value2 >= 85) {
        // Mostrar una tarjeta
        this.mostrarTarjeta8 = true;
        this.mostrarTarjeta7 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta7 = false;
      }
    }else{
      if (this.value1 >= 140 || this.value2 >= 90) {
        // Mostrar una tarjeta
        this.mostrarTarjeta8 = true;
        this.mostrarTarjeta7 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta7 = false;
      }
    }
  }

  q6si(): void {
    this.mostrarTarjeta8 = false;
    this.mostrarTarjeta9 = true;
    this.ocultar11 = false;
    this.ocultar12 = false;
  }

  //control 3

  q7si(): void {
    this.control = false;
    this.mostrarTarjeta10 = true;
    this.ocultar13 = false;
    this.ocultar14 = false;
  }

  guardar4(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    const value3 = this.value3;

    if(value3 == 1){
      if (this.value1 >= 130 || this.value2 >= 85) {
        // Mostrar una tarjeta
        this.mostrarTarjeta11 = true;
        this.mostrarTarjeta10 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta10 = false;
      }

    }else{
      if (this.value1 >= 140 || this.value2 >= 90) {
        // Mostrar una tarjeta
        this.mostrarTarjeta11 = true;
        this.mostrarTarjeta10 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta10 = false;
      }

    }

  }

  q8si(): void {
    this.mostrarTarjeta11 = false;
    this.mostrarTarjeta12 = true;
    this.ocultar15 = false;
    this.ocultar16 = false;
  }


  //control 4

  q9si(): void {
    this.control = false;
    this.mostrarTarjeta13 = true;
    this.ocultar17 = false;
    this.ocultar18 = false;
  }

  guardar5(): void {
    // Obtener los valores de las variables
    const value1 = this.value1;
    const value2 = this.value2;
    const value3 = this.value3;

    if(value3 == 1){
      if (this.value1 >= 130 || this.value2 >= 85) {
        // Mostrar una tarjeta
        this.mostrarTarjeta14 = true;
        this.mostrarTarjeta13 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta13 = false;
      }
    }else{
      if (this.value1 >= 140 || this.value2 >= 90) {
        // Mostrar una tarjeta
        this.mostrarTarjeta14 = true;
        this.mostrarTarjeta13 = false;
      }else{
        this.mostrarTarjeta112 = true;
        this.mostrarTarjeta13 = false;
      }

    }



  }

}















