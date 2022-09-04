import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  visibleTotalList: boolean = true;
  footer : boolean = true;

  students: any[] = [
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    },
    {
      image: "https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg",
      name: "John Wick",
      years: 14
    }
  ];

  collectFromHeader(value: any) {
    console.log(value);
    this.visibleTotalList = false;
  }

  isFooterVisibleEvent(value :any){
    this.footer = value;
  }
}
