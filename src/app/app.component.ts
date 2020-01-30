import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModelWindowComponent} from './model-window/model-window.component';
import {RefDirective} from './ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective, {static: false} ) refDir: RefDirective;
  color   = 'accent';
  navbar  = 'container__navbar bg1';
  constructor(private resolver: ComponentFactoryResolver ) {}

  // showWindow() {
  //   const modalFactory =  this.resolver.resolveComponentFactory(ModelWindowComponent);
  //   this.refDir.containerRef.clear();
  //   const component = this.refDir.containerRef.createComponent(modalFactory);
  //   component.instance.title = 'Modal window';
  //   component.instance.close.subscribe(() => {
  //     this.refDir.containerRef.clear()
  //   });
  // }
  changeHeader() {
    if (this.navbar === 'container__navbar bg1') {
       this.navbar = 'container__navbar bg2';
    } else {
      this.navbar = 'container__navbar bg1';
    }
  }
}

