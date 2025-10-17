import { Component } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../model/task';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks-add',
  standalone: true,
  imports: [],
  templateUrl: './tasks-add.component.html',
  styleUrl: './tasks-add.component.css'
})
export class TasksAddComponent {

  constructor(private taskService: TaskServiceService,private taskList:TasksListComponent) {}

  
  addTask(taskName : string){
    const newTask = new Task(
      this.taskService.getNewId(),
      taskName,
      "pending"
    );
    this.taskService.addTask(newTask);
    this.taskList.action="";
  }
}
