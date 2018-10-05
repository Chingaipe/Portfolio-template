import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Array<string> = ['Lorem Ipsum', 'Lorem Ipsum 2', 'Lorem 3', 'Search-app'];

  constructor() { }

  ngOnInit() {
  }

}
