import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title="Available courses"
  courses=[
    {id:1, name:'Angular',enrolcount:2, hours:4},
    {id:2, name:'React',enrolcount:5, hours:5},
    {id:3, name:'MongoDB',enrolcount:3, hours:3},
    {id:4, name:'SQL',enrolcount:1, hours:2},
    {id:6, name:'Java',enrolcount:2, hours:8},
    {id:7, name:'Python',enrolcount:3, hours:8},
    {id:8, name:'HTML',enrolcount:2, hours:8},
    {id:9, name:'Bootstrap',enrolcount:4, hours:8},
    {id:10, name:'Unix',enrolcount:5, hours:4},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
