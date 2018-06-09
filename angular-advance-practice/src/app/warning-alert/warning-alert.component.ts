import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>Danger Message !!</p>
  `,
  styles: [
    `
      p{
        border : 1px solid red;
        background-color: mistyrose;
        padding: 20px;
      }
    `
  ]
})

export class WarningAlertComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
