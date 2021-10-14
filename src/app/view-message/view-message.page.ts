import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireserviceService } from '../services/fireservice.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {

  Referencias={};

  constructor(
    private activatedRoute: ActivatedRoute,
    public fireService:FireserviceService,
    public router:Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.fireService.getById('Referencias',id).then(res=>{
      res.subscribe(info=>{
        this.Referencias = info.data()
        return this.Referencias
      })
    })
  }

  getBackButtonText() {
    this.router.navigateByUrl('home')
  }
}
