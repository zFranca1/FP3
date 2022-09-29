import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {
  name: string;
  job: string;

  constructor(private userService: UserService, 
    private toastController: ToastController) {
      
    }

  ngOnInit() {}

  add() {
    const user = {
      name: this.name,
      job: this.job,
    };

    this.userService
      .create(user)
      .then((resposta) => {
        console.log(resposta);
        this.showMessage("User added.")
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  private async showMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
