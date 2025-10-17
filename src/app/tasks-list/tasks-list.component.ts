import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../model/task';
import { TasksAddComponent } from '../tasks-add/tasks-add.component';
import { TasksEditComponent } from "../tasks-edit/tasks-edit.component";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TasksAddComponent, TasksEditComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent implements OnInit{

  tasks:Task[] = [];
  action ="" ;
  taskToUpdate?:Task;

  constructor(private taskService: TaskServiceService) {}

 

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.taskService.tasksUpdated.subscribe(
      (tasks:Task[])=>{
        this.tasks = tasks;
      }
    );
  }

  editTask(task:Task){
    this.taskToUpdate = task;
    this.setAction("edit");
  }
  setAction(action : string){
    this.action = action;
  }

  deleteTask(task:Task){
    if (confirm("Are you sure you want to delete this task?")) {
      this.taskService.deleteTask(task)
        alert("Task deleted successfully!");
      };
    }
    
  }

