import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
  // styleUrls: ['../../../styles/components/header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'acme';

  constructor() { }

  ngOnInit(): void {
  }

}
