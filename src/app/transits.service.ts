import { Injectable} from '@angular/core';
import { Transits } from './Transits';


@Injectable({
  providedIn: 'root'
})
export class TransitsService {

  transits: Transits[];

  private obj = {};

  constructor() {}

  getDate(date) {
      let dd = date.getDate();
      if (dd < 10) dd = '0' + dd;

      let mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      let yy = date.getFullYear();
      if (yy < 10) yy = '0' + yy;

      return dd + '.' + mm + '.' + yy;
  }

  removeTransit(transit: Transits) {
      for (let i = 0; i < this.transits.length; i++) {
          if (transit == this.transits[i]) {
              this.transits.splice(i, 1);
              localStorage.setItem('transits', JSON.stringify(this.transits));
          }
      }
  }

  repeatTransit(transit: Transits) {
      for (let i = 0; i < this.transits.length; i++) {
          if (transit == this.transits[i]) {
              this.obj = this.transits[i];
          }
      }
  }

  addTransits(transit: Transits) {
      this.transits.push(transit);
      let transits = [];
      if (localStorage.getItem('transits') === null) {
          transits = [];
          transit.date = this.getDate(new Date());
          transits.push(transit);
          localStorage.setItem('transits', JSON.stringify(transits));
      } else {
          transits = JSON.parse(localStorage.getItem('transits'));
          transit.date = this.getDate(new Date());
          transits.push(transit);
          localStorage.setItem('transits', JSON.stringify(transits));
      }
  }

  getTransits() {
      if (localStorage.getItem('transits') === null) {
          this.transits = [];
      } else {
          this.transits = JSON.parse(localStorage.getItem('transits'));
      }
      return this.transits;
  }

  getRepeatTransit() {
      let a = this.obj;
      this.obj = {};
      return a;
  }
}