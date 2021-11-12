import { Injectable } from "@angular/core";

@Injectable()

export class WordService{
  constructor(){}
  getIp(){
    return Promise.resolve('hihi')
  }
}
