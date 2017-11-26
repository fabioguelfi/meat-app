import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-container.component.html'
})
export class InputCotainerComponent implements OnInit, AfterContentInit {

  input: any

  @Input() label: string
  @Input() erroMessage: string

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Este componente precisa ser usado com uma diretiva ng model')
    } 
  }

  hasSuccess(): boolean{
   return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
   return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
