import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { WordService } from './word.service';

@Component({
  templateUrl: './word.component.html',
  selector: 'app-word',
  styleUrls: ['./word.component.scss'],
  providers: [WordService]

})
export class WordComponent implements OnInit {
  en: string = 'Hello'
  vn = 'Xin chao'
  @Input() name: String = '';
  @Output() myClick = new EventEmitter<boolean>()

  constructor(private wordService: WordService){
  }
  ngOnInit(){
    this.myClick.emit(true)
    this.wordService.getIp().then((result) => console.log(result))
  }
}
