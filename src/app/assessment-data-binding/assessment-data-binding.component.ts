import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-data-binding',
  templateUrl: './assessment-data-binding.component.html',
  styleUrls: ['./assessment-data-binding.component.css']
})
export class AssessmentDataBindingComponent implements OnInit {

  userName = '';
  constructor() { }

  ngOnInit() {}
  OnUpdateUserName() {
    this.userName = '';
  }
}
