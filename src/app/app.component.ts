import { Component, VERSION } from '@angular/core';
import { version } from '../../package.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major + '.' + VERSION.minor + '.' + VERSION.patch;

  public version: string = version;
}
