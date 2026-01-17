import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngMat';
  notifications = 1;
  matBadgeOverlapFlag: boolean = false;
  showSpinner:boolean = false;
  opened: boolean = false;
  
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

  log(state: any) {
    console.log('Dropdown is now: ', state);
  }
}
