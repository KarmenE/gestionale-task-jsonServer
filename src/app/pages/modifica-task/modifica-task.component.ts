
import { Component, OnInit, Renderer2 } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-modifica-task',
  templateUrl: './modifica-task.component.html'
})
export class ModificaTaskComponent implements OnInit {

  task: Task | undefined;

  constructor(
    private taskService: TaskService, 
    private route: ActivatedRoute, 
    private router: Router,
    private renderer: Renderer2 // Inietto il Renderer2
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.taskService.getTaskById(id).subscribe({
      next: (task) => (this.task = task),
      error: (err) => console.error('Errore durante il caricamento del task:', err)
    });
  }

  ngAfterViewInit(): void {
    if (this.task) {
      const titleInput = document.querySelector('#title'); // Seleziono l'input direttamente
      if (titleInput) {
        this.renderer.selectRootElement(titleInput).focus(); // Focus sull'elemento tramite Renderer2
      }
    }
  }

  saveChanges(): void {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Errore durante l\'aggiornamento del task:', err)
      });
    }
  }

  backHomepage(): void {
    this.router.navigate(['/']);
  }
}

