import { Component, OnInit } from '@angular/core';
import { Transits }  from  '../Transits';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TransitsService}  from '../transits.service';

@Component({
  selector: 'app-transits',
  templateUrl: './transits.component.html',
  styleUrls: ['./transits.component.css'],
})
export class TransitsComponent implements OnInit {

  monthList: String[];
  yearList: Number[];
  TransitsForm: FormGroup;
  transit: Transits[];

  constructor(private fb: FormBuilder,
              private transitService: TransitsService) {}

  ngOnInit() {

      this.monthList = [];
      for (let i = 1; i <= 12; i++) {
          if (i < 10)
              this.monthList.push('0' + i);
          else
              this.monthList.push('' + i);
      }

      this.yearList = [];
      for (let i = 19; i < 40; i++) {
          this.yearList.push(i);
      }

      this.TransitsForm = this.fb.group({
          numberCard: this.fb.group({
              firstField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              secondField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              thirdField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              fourthField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              fio: ['', [Validators.required, Validators.pattern(/[a-zA-Z]/)]],
              activeMonth: ['', [Validators.required]],
              activeYear: ['', [Validators.required]]
          }),

          numberCardto: this.fb.group({
              firstField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              secondField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              thirdField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]],
              fourthField: [null, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(4)]]
          }),
          sumary: [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
          date: ['']
      })
      this.TransitsForm.patchValue(this.transitService.getRepeatTransit())
  }

  onSubmit() {
      if (this.TransitsForm.valid) {
          this.transitService.addTransits(
              this.TransitsForm.value
          )
      }
  }

}