import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../services/data.service';
import { FireserviceService } from '../services/fireservice.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  constructor(    public fireService:FireserviceService,
    ) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
  eliminar(id){
   this.fireService.delete('Referencias', id) 
  }
}
