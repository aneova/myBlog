import { Component, OnInit} from '@angular/core';
import {TodosService} from '../shared/todos.service';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ProgressSpinnerMode, ThemePalette} from '@angular/material';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  private loading = true;
  private searchString = '';
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  constructor(private todosService: TodosService, private router: Router) { }

  ngOnInit() {
      this.todosService.fetchTodos()
      .pipe(delay(1000))
      .subscribe(() => {
        this.loading = false;
    });
}

  onChange(id: number) {
    this.todosService.onToggle(id);
}
    removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }
}
