import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'demo1';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  counter = 0;
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'Pikachu';
    }
    this.counter++;
  }
  getStyle(){
    return { 'font-size': 12 + this.counter + 'px' };
  }
}
