import {Component} from '@angular/core'

@Component({
  templateUrl: './word.component.html',
  selector: 'app-word',
  styleUrls: ['./word.component.scss'],

})
export class WordComponent{
  en: string = 'Hello'
  vn = 'Xin chao'
}
