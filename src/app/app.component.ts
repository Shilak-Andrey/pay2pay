import { Component } from '@angular/core';
import { TransitsService } from './transits.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TransitsService]
})
export class AppComponent {
  title = 'pay2pay';
}
