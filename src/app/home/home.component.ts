import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {interval, Observable, timer} from 'rxjs';
import {takeUntil} from 'rxjs-compat/operator/takeUntil';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOpen = true;
  isCursor = true;
  // tslint:disable-next-line:max-line-length
  ctext = 'Hello! My name is Anna! This website is devoted to study of the Angular8 framework. The source code can be found here http://github.com/aneova.' + ' If you have any suggestions about my codes and performance, do not hesitate to contact me Anna.Neova@gmail.com';
  chCtext = '';
  i = 0;
  private timerId: number;
  private timerId2: number;

  constructor(private router: Router) {

  }
  ngOnInit() {

  this.timerId = setInterval(() => {this.isOpen = !this.isOpen; }, 500);
  setTimeout(() => { clearInterval(this.timerId); this.isCursor = false; }, 2500);

  this.timerId2 = setInterval(() => {this.type(); }, 50);
   // setTimeout(() => { clearInterval(this.timerId); this.isCursor = false; }, 25000);
  }

  type() {
    this.chCtext = this.ctext.substr(0, this.i + 1);
    if ( this.i < this.ctext.length) { this.i++;
    //                                   console.log(this.i,' -> ', this.ctext.length);
    }
  }


  goToHomePage() {
    this.router.navigate(['/posts']);
  }

    goToDoPage() {
      this.router.navigate(['/todos']);
    }
}
