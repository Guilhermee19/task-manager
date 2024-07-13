import { Component, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from '../../pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [MatButtonModule, CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent {
  @Input() task: ITask = {} as ITask;

  drop(event: CdkDragDrop<string[]>) {
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

  newTask(){
    this.task.tasks.push('Task')
  }
}
