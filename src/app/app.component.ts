import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-App';
}
