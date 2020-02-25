import { Injectable } from '@angular/core';
import {interval, Observable, Observer, of, Subject, Subscription, timer} from 'rxjs';
import * as moment from 'moment';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListMusicService {

    sub: Subscription;
    stream$: Subject<void> = new Subject<void>();

    constructor() {
        // Loading audio
        this.audioObj.src = this.files[0].url;
        this.audioObj.load();
    }

    private audioObj = new Audio();
    strTime: string;

    private myObservable = this.getTrack();
    private timerId;
    private currentID = 0;
    files: any = [
   {
      url:
        'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1685%20Purcell%20%2C%20Trumpet%20Tune%20and%20Air.mp3',
      name: 'Trumpet Tune and Air',
      artist: 'Purcell',
      id: 0
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1709%20Bach%20%2C%20Toccata%20in%20D%20minor.mp3',
      name: '1709 Bach Toccata in D minor',
      artist: 'J.S. Bach',
      id: 1
    },
    {
      // tslint:disable-next-line: max-line-length
      url: 'https://ia801900.us.archive.org/7/items/100ClassicalMusicMasterpieces/1725%20Vivaldi%20%2C%20The%20Four%20Seasons%20-%20Spring.mp3',
      name: 'Vivaldi The four seasons. Spring.',
      artist: 'Vivaldi',
      id: 2
    }
  ];
 //
 //  private p: Promise<string> = new Promise<string> (resolve => {
 //     setTimeout(() => {resolve('Promise resolved'); }, 4000);
 // });



// myDate = new Observable(obs => {
//     let timerId;
//     timerId = setInterval(() => {
//         obs.next(100 - 100 * (this.audioObj.duration - this.audioObj.currentTime) / this.audioObj.duration);
//         this.strTime =  this.getformatedTime(this.audioObj.duration - this.audioObj.currentTime);
//         console.log(this.audioObj.ended);
//         }, 100);
//
//     });
// private timerId: number;
myDate: Observable<any> = new Observable(obs => {
    this.timerId = setInterval(() => {
        if (this.audioObj.ended === false) {
            obs.next(100 - 100 * (this.audioObj.duration - this.audioObj.currentTime) / this.audioObj.duration);
        } else {
            if (this.currentID < 2) {
                this.currentID = this.currentID + 1;
            } else {
                this.currentID = 0;
            }
            console.log(this.currentID);

            this.audioObj.src = this.files[this.currentID].url;
            this.audioObj.load();
            this.onplay(this.currentID);
            // setTimeout(() => { clearInterval(this.timerId); }, this.audioObj.duration);
            // obs.complete();
        }
    }, 200);
});


// Create observer object
//     myObserver = {
//         next: x => {
//             setInterval(() => {
//                 this.strTime =  this.getformatedTime(this.audioObj.duration - this.audioObj.currentTime);
//                 //this.myDate = 100 - 100 * (this.audioObj.duration - this.audioObj.currentTime) / this.audioObj.duration;
//                 if ( this.audioObj.ended === true) {
//                     this.currentID = this.currentID + 1;
//                     console.log(this.currentID);
//                     this.audioObj.src = this.files[this.currentID].url;
//                     this.audioObj.load();
//                     this.onplay(this.currentID);
//                 }
//             }, 500);
//         },
//         error: err => console.error('Observer got an error: ' + err),
//         complete: () => console.log('Observer got a complete notification'),
//     };

    // obs.next(100 - 100 * (this.audioObj.duration - this.audioObj.currentTime) / this.audioObj.duration);
    // this.strTime =  this.getformatedTime(this.audioObj.duration - this.audioObj.currentTime);
    // console.log(this.audioObj.ended);
    // obs.complete(console.log('done'));
    // if(this.audioObj.ended === true) {console.log("Finished!"); obs.complete(); obs.unsubscribe();}
    // });

setTrackPosition(time: number) {
       // console.log(this.audioObj.duration * time);
        this.audioObj.currentTime = this.audioObj.duration * time * 0.01;
        // this.myDate = time;
    }

getformatedTime(time: number, format: string = 'HH:mm:ss') {
        const momentTime = time * 1000;
        return moment.utc(momentTime).format(format);
    }

getTrack() {
    return of(this.files); // get a new track from array files
  }

onplay(id: number) {
    if ( this.audioObj.currentTime === 0) {
        this.currentID = id;
    } else {
        if ( this.currentID !== id) {
            this.currentID = id;
            this.audioObj.src = this.files[this.currentID].url;
            this.audioObj.load();
        }
    }
    this.sub = this.myDate.subscribe(value => {
        this.strTime =  this.getformatedTime(this.audioObj.duration - this.audioObj.currentTime);
    });
    this.audioObj.paused ? this.audioObj.play() : this.audioObj.pause();
}

onpause(id: number) {
    this.audioObj.pause();
    this.sub.unsubscribe();
    console.log(this.audioObj.paused);

  }

onstop(id: number) {
    this.audioObj.pause();
  }

getTrackName(id: number): string {
    const str: string = this.files[id].artist;
    return str;
  }

getlenght(): number {
    return this.audioObj.currentTime;
  }
}
