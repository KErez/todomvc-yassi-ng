import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabelListComponent } from './components/label-list/label-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoMainComponent } from './components/todo-main/todo-main.component';
import { TodoCountComponent } from './components/todo-count/todo-count.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFilteringPipe } from './services/data-filtering.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LabelListComponent,
    AddTodoComponent,
    FooterComponent,
    TodoListComponent,
    TodoMainComponent,
    TodoCountComponent,
    DataFilteringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
