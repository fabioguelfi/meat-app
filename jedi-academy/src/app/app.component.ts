import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  luke = {name: 'luke', isJedi: true, temple: 'Coruscant'}
  fabio = {name: 'Fabio', isJedi: true, temple: 'AngularLand'}
  amanda = {name: 'Amanda', isJedi: false}

}
