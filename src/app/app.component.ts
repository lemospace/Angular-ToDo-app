import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [
    {
      'title': 'title',
      'text': 'text'
    },
    {
      'title': 'title 2',
      'text': 'text 2 text text text text text'
    },
    {
      'title': 'title 3 title title title title title',
      'text': 'text 3'
    },
    {
      'title': 'title 4 title title title title title title title title',
      'text': 'text 4 text text text text text text text text text text'
    },
    {
      'title': 'title 5',
      'text': 'text 5'
    },
  ];

  addNewTodo(title, text) {
    let newTodo = {
      'title': title,
      'text': text
    }
    this.todos.push(newTodo);
  }
  deleteToDo(todo) {
    this.todos = this.todos.filter(t => t.title !== todo.title);
  }
}
