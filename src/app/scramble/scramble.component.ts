import { Component, OnInit } from '@angular/core';
import {WordsService} from '../words.service';

@Component({
  selector: 'app-scramble',
  templateUrl: './scramble.component.html',
  styleUrls: ['./scramble.component.css']
})
export class ScrambleComponent implements OnInit {
  words;
  currentWord: string;
  shuffledWord: string;
  userWord;
  wins = 0; losses = 0; TTL = 10; secondsLeft = 0;
  timer = null;

  constructor(private wordsService: WordsService) { }

  start() {
    if (!this.words.length) { return; }
    this.currentWord = this.words.shift().toUpperCase();
    this.shuffledWord = this.shuffleWord(this.currentWord);
    this.userWord = '';
    this.secondsLeft = this.TTL;
    this.timer = setInterval(() => this.getTime(), 1000);
  }

  shuffleWord(w){
    return this.wordsService.shuffleString(w);
  }

  checkInput() {
    if (this.timer && this.userWord && (this.userWord.toUpperCase() === this.currentWord) && this.secondsLeft>0) {
      this.stop(true);
    }
  }

  getTime() {
    this.secondsLeft--;
    if (this.secondsLeft <= 0){ this.stop(false); }
  }

  stop(win:boolean){
    clearInterval(this.timer); this.timer = null;
    win ? this.wins++ : (this.losses++, this.shuffledWord = this.currentWord);
  }

  ngOnInit() {
    this.words = this.wordsService.words;
  }

}
