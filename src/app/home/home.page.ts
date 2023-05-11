import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myList: any[] = [];
  todo = '';
  selectedItem: any;
  updating: boolean = false;
  newTodo = '';
  index: any;

  constructor() {}

  public addTodos = () => {
    if (this.todo.length) {
      const newID =
        this.myList.length > 0 ? this.myList[this.myList.length - 1].id + 1 : 1;
      this.myList.push({ id: newID, message: this.todo });
      this.todo = '';
      console.log(this.myList);
    }
  };

  public handleDelete = (id: number) => {
    this.myList = this.myList.filter((item) => item.id !== id);
  };

  public handleEdit = (id: number) => {
    this.updating = true;
    this.index = this.myList.find((idx) => idx.id === id);
    this.todo = this.index.message;
  };

  public handleUpdate = () => {
    this.newTodo = this.todo;
    this.index.message = this.newTodo;
    this.todo = '';
    this.updating = false;
  };
}
