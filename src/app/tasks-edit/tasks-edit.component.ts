import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../model/task';
import { FormsModule } from '@angular/forms';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'app-tasks-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks-edit.component.html',
  styleUrl: './tasks-edit.component.css'
})
export class TasksEditComponent  implements OnChanges{
  @Input() task!:Task;

  taskToEdit!:Task;

  ngOnChanges(): void {
    if(this.task){
      this.taskToEdit=new Task(this.task.id,this.task.taskName,this.task.taskStatus);
    }
      
  }
  constructor(private taskService: TaskServiceService,private taskList:TasksListComponent) {}

 
  editTask(){
    this.taskService.updateTask(this.taskToEdit);
    this.taskList.setAction("");

}

cancelEdit(){
  this.taskList.setAction("");
}

}