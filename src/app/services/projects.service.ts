import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { IProject } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private http = inject(HttpService);

  getProjects(): Observable<IProject> {
    return this.http.get<IProject>('projects/');
  }
}
