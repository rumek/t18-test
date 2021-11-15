import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
     <h4> {{ 'ABOUT.CONTACT.IF_U_HAVE_ANY_QUESTIONS' | tl8 }} </h4>
     <p> {{ 'ABOUT.CONTACT.EMAIL' | tl8 }}: admin@pc3.example.com </p>
     <p> {{ 'ABOUT.CONTACT.PHONE_NUMBER' | tl8 }}: +48 123456789 </p>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
