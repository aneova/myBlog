import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ListMusicService} from '../shared/list-music.service';
import {rotateIn} from 'ng-animate';
import {transition, trigger, useAnimation} from '@angular/animations';
import {MatSliderChange} from '@angular/material';

@Component({
  selector: 'app-pleer',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  animations: [
     trigger('fadeInDown', [
          transition('* => *', useAnimation(rotateIn, { params: { timing: 2, delay: 1 }}
          ))
      ])
  ]
})

export class PlayerComponent implements OnInit {
  @Output() slider: EventEmitter<string> = new EventEmitter<string>();
  fadeInDown: any;
  thumbLabel = false;
  value = 0;

  state = false;
  files: Array<any> = [];
  currentFile: string = this.listMusic.files[0].artist;
  currentId = 0;
  currentValue: number;
  backgroundToggle = true;

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;
  constructor(public listMusic: ListMusicService) { }

  musicFiles: [] = this.listMusic.files;
  skinStyle = 'skin-no-animation';

  ngOnInit() {
   }

  OnPlay(id: number) {
    this.listMusic.onplay(id);
    this.currentFile  = this.listMusic.getTrackName(id);
    this.currentId = id;
    this.state = true;
    this.skinStyle = 'skin';
    document.getElementById('idskin').style.animationPlayState = 'running';
  }

  OnStop(id: number) {
    this.listMusic.onstop(id);
    document.getElementById('idskin').style.animationPlayState = 'paused';
    this.state = !this.state;
  }

  OnPause(id: number) {
    this.listMusic.onpause(id);
    this.state = !this.state;
    document.getElementById('idskin').style.animationPlayState = 'paused';
  }

  OnNext(id: number) {
    this.listMusic.onplay(id + 1);
    this.state = true;
    this.currentId = id + 1;
    this.currentFile  = this.listMusic.getTrackName(id + 1);
  }

  OnPrev(id: number) {
    this.listMusic.onplay(id - 1);
    this.currentFile  = this.listMusic.getTrackName(id - 1);
    this.state = true;
    this.currentId = id - 1;
  }

  getLenght(): number {
    this.currentValue = this.listMusic.getlenght();
    return  this.currentValue;
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }


  pitch($event: MatSliderChange) {
  this.value = $event.value;
  console.log(this.value);
  this.listMusic.setTrackPosition(this.value);

  }
}
