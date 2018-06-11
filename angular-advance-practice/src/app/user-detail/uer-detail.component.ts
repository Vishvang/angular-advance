import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [ `input { margin: 5px 0px 10px 0px;width:100%; } ` ]
})
export class UserDetailComponent {
  userName = '';

  onClick(event) {
    this.userName = '';
  }
}
