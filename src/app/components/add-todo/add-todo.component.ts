import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { yassi } from 'yassi';

@Component({
  selector: 'yas-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodoControl: FormControl = new FormControl(null);

  constructor() { }

  ngOnInit(): void {}

  enterPressed(): void {
    yassi.communicate('itemList', 'addItem', [this.addTodoControl.value]);
    this.addTodoControl.reset();
  }
}
