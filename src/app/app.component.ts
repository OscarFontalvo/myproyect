import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproyect';
  constructor(){

  }

  pantalla="";
  pantalla2="";
  operador="";
  uno(uno:string){
    this.pantalla=this.pantalla+"1";
  }

  dos(dos:string){
    this.pantalla=this.pantalla+"2";
  }

  tres(tres:string){
    this.pantalla=this.pantalla+"3";
  }

  cuatro(cuatro:string){
    this.pantalla=this.pantalla+"4";
  }

  cinco(cinco:string){
    this.pantalla=this.pantalla+"5";
  }

  seis(seis:string){
    this.pantalla=this.pantalla+"6";
  }

  siete(siete:string){
    this.pantalla=this.pantalla+"7";
  }

  ocho(ocho:string){
    this.pantalla=this.pantalla+"8";
  }

  nueve(nueve:string){
    this.pantalla=this.pantalla+"9";
  }

  cero(nueve:string){
    this.pantalla=this.pantalla+"0";
  }

  c(){
    this.pantalla="";
    this.pantalla2="";
  }

  mas(){
    this.pantalla2=this.pantalla;
    this.pantalla="";
    this.operador="mas";
  }

  menos(){
    this.pantalla2=this.pantalla;
    this.pantalla="";
    this.operador="menos";
  }

  multi(){
    this.pantalla2=this.pantalla;
    this.pantalla="";
    this.operador="multi";
  }

  divi(){
    this.pantalla2=this.pantalla;
    this.pantalla="";
    this.operador="divi";
  }

  igual(){
    let valor1=Number(this.pantalla);
    let valor2=Number(this.pantalla2);
  
    if(this.operador=="mas"){
      let suma = Number(valor1) + Number(valor2);
      this.pantalla = suma.toString();
    }else if(this.operador=="menos"){
      let suma = Number(valor2) - Number(valor1);
      this.pantalla = suma.toString();
    }else if(this.operador=="multi"){
      let suma = Number(valor1) * Number(valor2);
      this.pantalla = suma.toString();
    }else if(this.operador=="divi"){
      let suma = Number(valor2) / Number(valor1);
      this.pantalla = suma.toString();
    }
  }
}

function elseif() {
  throw new Error('Function not implemented.');
}
