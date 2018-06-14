import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private _words: string [] = [
    'Антилопа',
    'Бегемот',
    'Автомобиль',
    'Футбол',
    'Паровоз',
    'велосипед',
    'окно',
    'монитор',
    'колонка'
  ];

  shuffle (a) {
    for (let j, x, i = a.length; i;
         j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
    return a;
  }

  shuffleString (s) {
    return this.shuffle(s.split('')).join('');
  }

  get words() {
    return this.shuffle(this._words);
  }
}
