import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { FireserviceService } from '../services/fireservice.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  Lista= []

  constructor(private data: DataService, public fireService:FireserviceService, public router:Router) {}

  ngOnInit() {
    this.fireService.getAll('Referencias').then(res =>{
      res.subscribe(lista =>{
        this.Lista = lista.map(referencias => {
          let data = referencias.payload.doc.data();
          data['id'] = referencias.payload.doc.id
          console.log(data['id'])
          return data
        })
        console.log(this.Lista)
      })
    })
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }
  
  logout(){
    this.fireService.logout().then(res => {
      localStorage.removeItem('user')
      this.router.navigateByUrl('signin')
      console.log(res);
    }, (err) =>{
      console.log(err)
    })
  }
  islogged(){
   if(this.fireService.islogged !== true)
   this.router.navigateByUrl('signin')
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
  

}
