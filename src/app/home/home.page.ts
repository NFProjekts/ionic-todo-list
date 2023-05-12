import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  index: any;
  todo = '';
  newTodo = '';
  myList: any[] = [];
  selectedItem: any;
  updating: boolean = false;

  constructor(private toastController: ToastController) {}

  public addTodos = () => {
    if (this.updating) {
      if (this.todo.length) {
        this.newTodo = this.todo;
        this.index.message = this.newTodo;
        this.todo = '';
        this.updating = false;
      } else {
        this.showToast(2);
      }
    } else {
      if (this.todo.length) {
        const newID =
          this.myList.length > 0
            ? this.myList[this.myList.length - 1].id + 1
            : 1;
        this.myList.push({ id: newID, message: this.todo });
        this.todo = '';
        console.log(this.myList);
      } else {
        this.showToast(2);
      }
    }
  };

  public handleDelete = (id: number) => {
    this.myList = this.myList.filter((item) => item.id !== id);
    this.showToast(1);
  };

  public handleEdit = (id: number) => {
    this.updating = true;
    this.index = this.myList.find((idx) => idx.id === id);
    this.todo = this.index.message;
  };

  public showToast = async (id: number) => {
    switch (id) {
      case 1:
        let toast1 = await this.toastController.create({
          message: 'Successfuly Deleted!',
          duration: 1500,
          position: 'top',
          color: 'success',
        });

        await toast1.present();
        break;
      case 2:
        let toast2 = await this.toastController.create({
          message: 'Text Field cannot be empty!',
          duration: 1500,
          position: 'top',
          color: 'danger',
        });

        await toast2.present();
        break;
    }
  };
}
