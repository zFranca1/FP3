import { Component } from '@angular/core';
import {
  AlertController,
  NumericValueAccessor,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome: string;
  public senha: number;
  public contas: any[] = [];

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    console.log('construtor do modulo home');
  }

  private async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
      animated: true,
    });
    toast.present();
  }

   async confirmarExclusao() {
    const alert = await this.alertController.create({
      header: 'Confirma exclusao?',
      buttons: [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          handler: () => {
            this.contas.pop();
            this.exibirMensagem('Conta removida');
          },
        },
      ],
    });

    await alert.present();
  }

  public exibirValor() {
    console.log(this.senha);
  }

  private criarConta() {
    const p = {
      nome: this.nome,
      senha: this.senha,
    };

    return p;
  }

  private adicionarFim(): void {
    this.contas.push(this.criarConta());
    this.exibirMensagem('Conta adicionada');
  }

}
