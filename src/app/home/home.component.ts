import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  animations: [

    trigger('openClose', [
      // state('open', style({
      //   height: '200px',
     //      opacity: 1,
     //      font-weight: bold
     //  //   backgroundColor: 'yellow'
     // }))
      // state('closed', style({
      //   height: '100px',
      //   opacity: 0.5,
      //   backgroundColor: 'green'
      // })),
      // transition('open => closed', [
      //   animate('1s')
      // ]),
      // transition('closed => open', [
      //   animate('2s')
      // ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isOpen = true;
  isCursor = true;
  ctext = 'Hello! My name is Anna! This website is devoted to study of the Angular8 framework. The source code can be found here http://github.com/aneova.' +
      ' If you have any questions or suggestions about my codes and performance, do not hesitate to contact me Anna.Neova@gmail.com';
  ch_ctext = '';
  i = 0;
  private timerId: number;
  private timerId2: number;

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.timerId = setInterval(() => {this.isOpen = !this.isOpen; }, 500);
    setTimeout(() => { clearInterval(this.timerId); this.isCursor = false; }, 2500);

    this.timerId2 = setInterval(() => {this.type(); }, 100);
   // setTimeout(() => { clearInterval(this.timerId); this.isCursor = false; }, 25000);
    }

  type() {
    this.ch_ctext = this.ctext.substr(0,this.i+1);
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
