import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  mobile=false;
projects= [{
  name: 'Javascript Advanced Pollution',
  language: 'Vanilla Javascript',
  libraries: 'Bootsrap',
  description: 'This is a a simple web app that fetches Air Quality Index data from AQICN via their free API and displays it.',
  link: 'https://naughty-sinoussi-73b643.netlify.app/',
  github: 'https://github.com/Cruyff97/Javascript-advanced-pollution',
  img: './assets/air poll.png',
  imgmobile:'./assets/air-mob.png'
},
{
  name: 'JobSearch AngularProject',
  language: 'Typescript',
  libraries:'Angular Material',
  description: 'An angular project that use API from themuse.com',
  framework: 'Angular',
  link: 'https://hopeful-edison-7d93ef.netlify.app/',
  github: 'https://github.com/Cruyff97/JobSearch-AngularProject',
  img: './assets/findjob.png',
  imgmobile:'./assets/'
},
{
  name: 'Todo Angular',
  language: 'Typescript',
  libraries: 'Angular Material',
  description: 'A small Todo App using Angular and Angular Material for styling.',
  framework: 'Angular',
  github:'https://github.com/Cruyff97/Todo-Angular',
  img: './assets/todo.png',
  imgmobile:'./assets/todo-mob.png'
},
{
  name: 'BookSearch Angular',
  language: 'Typescript',
  libraries: 'Angular Material',
  description: 'A small project in Angular that use API from openlibrary.org to show books based on category search.',
  framework: 'Angular',
  link:'https://tender-sammet-0ab8f7.netlify.app/',
  github:'https://github.com/Cruyff97/BookSearch-Angular',
  img: './assets/books.png',
  imgmobile:'./assets/books-mob.png'
},
{ name: 'ImagesApp Unsplash',
language: 'Typescript',
libraries: 'Angular Material',
description:'A small application in Angular that fetches images from Unsplash API.',
framework: 'Angular',
 link: 'https://images-app-ochre.vercel.app/' ,
 github: 'https://github.com/Cruyff97/ImagesApp',
 img: '././assets/bg2.png',
 imgmobile:'./assets/images-mob.png'
}]
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = false;
    }
    
  }

}
