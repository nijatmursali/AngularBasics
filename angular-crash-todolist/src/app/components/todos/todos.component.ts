import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }
  
  ngOnInit(): void {
    this.todos = [
      {
      id: 1,
      title: 'TEst',
      completed: false
      }
    ]

  }

}
