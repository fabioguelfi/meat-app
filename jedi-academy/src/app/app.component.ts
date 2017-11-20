import { Component } from '@angular/core';

import {Student} from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  students: Student[] = [
    {name: 'luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Fabio', isJedi: true, temple: 'AngularLand'},
    {name: 'Amanda', isJedi: false}
  ]
  
}
