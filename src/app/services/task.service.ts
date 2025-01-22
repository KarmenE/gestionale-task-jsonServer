
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../types/task.type';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/tasks'; // URL del JSON Server

  constructor(private http: HttpClient) {}

  // Ottenere tutti i task
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  // Ottenere un task per ID
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${id}`);
  }

  // Aggiungere un nuovo task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task);
  }

  // Modificare un task
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }

  // Eliminare un task
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
