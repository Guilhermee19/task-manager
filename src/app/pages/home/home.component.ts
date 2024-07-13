import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray, transferArrayItem, CdkDropListGroup, DragDropModule} from '@angular/cdk/drag-drop';
import { CardTaskComponent } from '../../components/card-task/card-task.component';
import {MatButtonModule} from '@angular/material/button';

export interface ITask {
  label: string,
  tasks: string[]
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, DragDropModule, CdkDropListGroup, CdkDropList, CdkDrag, CardTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cards_list: ITask[] = [
    {
      label: 'To-Do',
      tasks: ['Plano A']
    },
    {
      label: 'Doing',
      tasks: ['Plano B']
    },
    {
      label: 'Done',
      tasks: ['Plano C']
    },
  ];

  dropList(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  newList(){
    this.cards_list.push( {
      label: 'Phase',
      tasks: ['Task']
    })
  }
}
