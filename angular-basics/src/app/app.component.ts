import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Type Here';
  inputValue: '';
  toggle: any;
  posts = [
    {
      title: "Post1", author: "akashin", date: new Date(), comments: [
        {name: "Anonymous", text: "Ololo"},
        {name: "Anonymous", text: "Azaza"}
      ]
    },
    {
      title: "Post2", author: "akashin", date: new Date(), comments: [
        {name: "Anonymous", text: "Ururu"}
      ]
    }
  ];
}
