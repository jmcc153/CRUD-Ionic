import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireserviceService } from '../services/fireservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.page.html',
  styleUrls: ['./form-update.page.scss'],
})
export class FormUpdatePage implements OnInit {

  referencias= {
    titulopub:'',
    tipopub:null,
    eventorevista:'',
    doi:'',
    autores:'',
    anyopub:null,
  }
  constructor(public activatedRoute: ActivatedRoute,public fireService: FireserviceService, public router: Router) { }
  
  ngOnInit() {
    
  }
  id = this.activatedRoute.snapshot.paramMap.get('id');
  update(){
    this.fireService.update('Referencias', this.id, this.referencias ).then(res=>{
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
