import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../services/fireservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-form-biblio',
  templateUrl: './form-biblio.page.html',
  styleUrls: ['./form-biblio.page.scss'],
})
export class FormBiblioPage implements OnInit {


  referencias= {
    titulopub:'',
    tipopub:null,
    eventorevista:'',
    doi:'',
    autores:'',
    anyopub:null,
  }

  constructor(public fireService: FireserviceService, public router: Router) { }

  ngOnInit() {
  }

  create(){
    this.fireService.create('Referencias', this.referencias ).then(res=>{
      console.log(res)
      this.router.navigateByUrl('home')
    }).catch(res=>{
      console.log(res)
    })
  }
  back(){
    this.router.navigateByUrl('home')
  }

}
