import { Component, OnInit } from '@angular/core';
import { ProjectGrepService } from '../services/project-grep/project-grep.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links: ProjectGrepService = new ProjectGrepService();
  github:any = this.links.getLinks();
  constructor() { }

  ngOnInit(): void {
  }

}
