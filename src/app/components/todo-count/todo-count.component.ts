import { Component, OnInit } from '@angular/core';
import { TodoCountModel } from './todo-count.model';

@Component({
  selector: 'yas-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss'],
  providers: [TodoCountModel],
})
export class TodoCountComponent implements OnInit {

  constructor(public todoCountModel: TodoCountModel) { }

  ngOnInit(): void {
    this.todoCountModel.todoCountFacade();
  }

}
