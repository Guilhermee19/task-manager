import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { IconDirective } from '../../directives/icon.directive';
import { PROJECTS } from '../../constants/projects';
import { IProject } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [HttpClientModule, RouterLink, IconDirective, DragDropModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  private projectsService = inject(ProjectsService);

  colls = [
    {
      title: 'Prioridades',
      array:[]
    },
    {
      title: 'Finalizados',
      array:[]
    },
    {
      title: 'Projetos',
      array: PROJECTS
    }
  ]

  ngOnInit(): void {
    this.getProjects()
  }

  drop(event: CdkDragDrop<IProject[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  getProjects(){
    // this.projectsService.getProjects().subscribe({
    //   next: (data) =>{
    //     console.log(data);
    //   }
    // })
  }
}
