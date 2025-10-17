import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasks: Task[] = [
    new Task(1, 'Rappel Js',  'Pending'),
    new Task(2, 'Exercice Crud',  'Pending'),
    new Task(3, 'Rappel des fonctions de tableaux',  'Done')
  ];

  tasksUpdated = new Subject<Task[]>

  getTasks(): Task[] {
    return [...this.tasks];
  }

  addTask(task: Task): void {
    this.tasks = [...this.tasks, task];
    this.tasksUpdated.next([...this.tasks]);
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.tasksUpdated.next([...this.tasks]);
  }

  updateTask(updatedTask: Task): void {
    this.tasks = this.tasks.map(
      (t:Task) => (updatedTask.id === t.id)?updatedTask:t
    );
    this.tasksUpdated.next([...this.tasks]);
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
    
  }

  getNewId(): number {
    return this.tasks[this.tasks.length - 1] . id + 1;
  }

  constructor() { }
}
