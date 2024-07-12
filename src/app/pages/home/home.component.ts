import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { CardTaskComponent } from '../../components/card-task/card-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CardTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  timePeriods = [
    'To-Do',
    'Doing',
    'Done',
  ];

  dropColl(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
