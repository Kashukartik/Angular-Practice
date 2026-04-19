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
    {id: 1, name: "Course 1"},
    {id: 2, name: "Course 2"},
    {id: 3, name: "Course 3"},
    {id: 4, name: "Course 4"}, 
  ];

  onAdd(){
    this.courses.push({id: 5, name: "Course 5"})
  }

  onRemove(index: number){
    this.courses.splice(index, 1);
  }
}
