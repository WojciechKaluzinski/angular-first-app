import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 todos: Todo[];

 inputTodo = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Pierwszy task',
        complited: false
      },
      {
        content: 'Drugi task',
        complited: true
      }
    ];
  }

  // tslint:disable-next-line:typedef
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      // tslint:disable-next-line:triple-equals
      if (i == id) { v.complited = !v.complited; }
      return v;
    });
  }

  // tslint:disable-next-line:typedef
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  // tslint:disable-next-line:typedef
  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      complited: false
    });
    this.inputTodo = '';
  }

}
