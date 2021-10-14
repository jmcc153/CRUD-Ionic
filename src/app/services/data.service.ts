import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}
export interface Referencias {
  titulopub:string,
  tipopub:number,
  eventorevista:string,
  doi:number,
  autores:string,
  anyopub:number,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    }
   
  ];
  public referencias: Referencias[] = [
    {
      titulopub:'',
      tipopub:null,
      eventorevista:'',
      doi:null,
      autores:'',
      anyopub:null,
    }
  ]

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
