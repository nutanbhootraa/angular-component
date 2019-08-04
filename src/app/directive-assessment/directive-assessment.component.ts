import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assessment',
  templateUrl: './directive-assessment.component.html',
  styleUrls :  ['./directive-assessment.component.css']
})
export class DirectiveAssessmentComponent implements OnInit {

  password1 = 'Secret Password = \'tuna\'';
  password2 = 'Open Password = \'jelly\'';
  display = false;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.display = !this.display;
    //this.logs.push(this.display ? this.password1 : this.password2);
    //this.logs.push(this.logs.length + 1);

    this.logs.push(new Date());

    return this.display;
  }
}
