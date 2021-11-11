import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  showText = false
  name = ''
  constructor() { }

  toggleForgot(){
    this.showText = !this.showText
  }
  // showEvent(event:any){
  //   // console.log(event)
  //   this.name = event.target.value
  // }

  ngOnInit(): void {
  }

}
