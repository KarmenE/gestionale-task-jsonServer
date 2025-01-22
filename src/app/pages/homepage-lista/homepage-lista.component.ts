
import { Component, OnInit } from '@angular/core';
import { Task } from '../../types/task.type';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-lista',
  templateUrl: './homepage-lista.component.html',
  styleUrl: './homepage-lista.component.css'
})
export class HomepageListaComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: (err) => console.error('Errore durante il caricamento dei task:', err)
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks(); // Ricarica la lista dei task
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/dettaglio', id]);
  }

  addTask(): void {
    this.router.navigate(['/aggiungi']);
  }

  editTask(id: number): void {
    this.router.navigate(['/modifica', id]);
  }
}
