import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home.html',
            link: './home',
            index: 0,
            icon: '/assets/icons8-html-5.svg'
        }, {
            label: 'About.css',
            link: './about',
            index: 1,
            icon: '/assets/icons8-css3.svg'
        }, {
            label: 'Projects.js',
            link: './projects',
            index: 2,
            icon: '/assets/icons8-javascript.svg'
        }, {
          label: 'Contact.ts',
          link: './contact',
          index: 3,
          icon: '/assets/icons8-typescript.svg'
      },
      {
        label: 'Github.md',
        link: './github',
        index: 4
    }
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
