import { Component, OnInit } from '@angular/core';
import { ProjectService } from './Project.service';
import { Project } from './Project';

@Component({
  selector: 'app-Project',
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private project:ProjectService) { }

  projectList:Project;
  ngOnInit() :void{
    this.project.GetProjects().subscribe(data=>this.projectList=data)
  }

}
