import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private _words: string [] = [
    'Антилопа','Бегемот','Автомобиль','Футбол','Паровоз','велосипед','окно',
    'монитор','колонка','грусть','зрелый','конопля','город','меломан','барабан',
    'бюджет','безопасность','восток','хоровод','крестьянин','прицел','землепашец',
    'бред','вексель','соло','работа','сантехник','слесарь','стерео','птицеед','месяц',
    'автомат','культура','семя','пожарный','продукт','гимнастика','умник','память','объект',
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
    return this.shuffle(this._words).slice(0,20);
  }
}
