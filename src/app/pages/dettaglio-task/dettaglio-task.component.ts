
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-dettaglio-task',
  templateUrl: './dettaglio-task.component.html',
  styleUrl: './dettaglio-task.component.css'
})
export class DettaglioTaskComponent implements OnInit {
  task: Task | undefined;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.taskService.getTaskById(id).subscribe({
      next: (task) => (this.task = task),
      error: (err) => console.error('Errore durante il caricamento del task:', err)
    });
  }

  backHomepage(): void {
    this.router.navigate(['/']);
  }
}
