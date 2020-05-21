import { Injectable } from '@angular/core';
import { Project } from './Project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

constructor(private http:HttpClient) { }

  GetProjects():Observable<Project>{
    return this.http.get<Project>("http://localhost:3000/project")
  }
}
