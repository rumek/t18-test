import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
      <ul>
        <li> <a routerLink="/">{{'NAVBAR.HOME' | tl8 }}</a> </li>
        <li> <a routerLink="/about">{{'NAVBAR.ABOUT' | tl8 }}</a> </li>
      </ul>
      <p>      
       <!-- <label>
        {{ 'NAVBAR.SELECT' | tl8 }}
          <select #langSelect (change)="translate.use(langSelect.value)">
            <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
          </select>
        </label> -->
      </p>
      <hr>

    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'es']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}