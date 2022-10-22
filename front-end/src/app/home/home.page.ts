import { Component } from '@angular/core';
import { AccountService } from '../api/account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public accounts: any[] = [];
  public login: string;
  public password: string;

  constructor(private accountService: AccountService) {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService
      .getAccount()
      .then((accounts: any[]) => {
        console.log(accounts);
        this.accounts = accounts;
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  createAccount() {
    const a = {
      login: this.login,
      password: this.password,
    };

    this.accountService.addAccount(a).then((accounts: any[]) => {
      console.log(accounts);
      this.accounts = accounts;
      this.getAccounts();
    });
  }

  deleteAccount(id: any){
    this.accountService.removeAccount(id).then(()=>
    {
      this.getAccounts();
    })
  }
}
