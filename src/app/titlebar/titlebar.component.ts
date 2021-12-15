import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

}


typeWriter():any {
  var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
  if (i < txt.length) {
    document.getElementById("demo")!.innerHTML += txt.charAt(i);
    i++;
    setTimeout(this.typeWriter, speed);
  } 
  }
}
