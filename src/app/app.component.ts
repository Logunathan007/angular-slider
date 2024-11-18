import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  slidingindex:number=0;
  slide:string[]=[
    "./Producers.png",
    "./Proposals.png",
    "./Services.png",
    "./Assessment.png"
  ]
}
