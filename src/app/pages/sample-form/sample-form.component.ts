import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormStructure } from 'src/app/models/form-structure';
import { AppFormStructure } from 'src/app/models/sample-form.structure';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {

  formStructure: FormStructure[] = AppFormStructure.samplePageFormStructure;
  details: {
    firstName?: string;
    lastName?: string;
  } = {};
  @ViewChild('sampleForm', { static: false }) sampleForm: NgForm;

  constructor() { }

  submitForm(): void {
    console.log(this.details);
  }

  ngOnInit(): void {
  }

}
