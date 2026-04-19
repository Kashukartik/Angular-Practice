import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  courses = [
    {id: 1, name: "C1"},
    {id: 2, name: "C2"},
    {id: 3, name: "C3"},
    {id: 4, name: "C4"}, 
  ];
}
