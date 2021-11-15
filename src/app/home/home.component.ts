import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>{{ 'HOME.TITLE' | tl8 }}</h2>
      <label>
        <p>Tłumaczenie tylko w pliku en.json: {{ 'HOME.DETAILS' | tl8 }}</p>
        <p>Brak tłumaczenia {{ 'HOME.NO_TRANSLATION' | tl8 }}</p>
      </label>
    `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
