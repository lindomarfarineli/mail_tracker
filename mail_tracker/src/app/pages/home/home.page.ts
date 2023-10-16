import { Component } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  eventsCollection : any[]=[]


  constructor(private mailService : MailService, private toastCont: ToastController) {}
findObject(event: any){

 

  console.log(event.detail.value);
  let objectCode = event.detail.value;

  this.mailService.findObject(objectCode).then(response => {

      let mail: any  = response;

      this.eventsCollection = mail.objetos[0].eventos;

    }).catch(error => {
      
    this.sendToast('objeto não encontrado');
  });
 }

 async sendToast(message: string) {
  const toast = await this.toastCont.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

}
