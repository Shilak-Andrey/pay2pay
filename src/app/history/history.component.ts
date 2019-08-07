import { Component, OnInit } from '@angular/core';
import { TransitsService} from '../transits.service';
import { Transits } from '../Transits';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {


  transits: Transits[];

  constructor(private transitsService: TransitsService) {

  }

  repeat(index) {
      this.transitsService.repeatTransit(index);
  }

  remove(index) {
      this.transitsService.removeTransit(index);
  }

  ngOnInit() {
      this.transits = this.transitsService.getTransits();
  }
}

