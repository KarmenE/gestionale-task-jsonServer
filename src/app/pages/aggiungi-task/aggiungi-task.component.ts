
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-aggiungi-task',
  templateUrl: './aggiungi-task.component.html'
})
export class AggiungiTaskComponent {
  @ViewChild('titleInput') titleInput!: ElementRef;

  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    urgency: 'bassa',
  };

  titleError: string = '';
  descriptionError: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  ngAfterViewInit(): void {
    this.titleInput.nativeElement.focus();
  }

  addTask(): void {
    this.titleError = '';
    this.descriptionError = '';
    let isError = false;

    if (!this.newTask.title) {
      this.titleError = 'Aggiungi titolo';
      isError = true;
    }

    if (!this.newTask.description) {
      this.descriptionError = 'Aggiungi descrizione';
      isError = true;
    }

    if (!isError) {
      this.taskService.addTask(this.newTask).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Errore durante l\'aggiunta del task:', err)
      });
    }
  }

  backHomepage(): void {
    this.router.navigate(['/']);
  }
}

