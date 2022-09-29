import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { UserService } from '../api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any = {};
  private page: number = 1;
  private totalPages: number = 1;

  constructor(
    private userService: UserService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.getUsers();
    this.delete(1);
  }

  goToUserAddPage() {
    this.router.navigateByUrl('/user-add');
  }

  goToUserDetailPage(user: any) {
    this.router.navigateByUrl(
      // '/user-detail/' + user.id,
      `/user-detail/${user.id}`,
       { state: user }
    );
  }

  private async showMessage(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  next() {
    if (this.page < this.totalPages) {
      this.page++;
      this.getUsers();
    } else {
      this.showMessage('Você está na última página!');
    }
  }

  previous() {
    if (this.page > 1) {
      this.page--;
      this.getUsers();
    } else {
      this.showMessage('Você está na primeira página!');
    }
  }

  getUsers() {
    this.userService
      .getAll(this.page)
      .then((users) => {
        this.users = users;
        this.totalPages = users.total_pages;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  delete(id: number) {
    this.userService
      .delete(id)
      .then((resposta) => {
        console.log(resposta);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}
