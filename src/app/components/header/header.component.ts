import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
  // styleUrls: ['../../../styles/components/header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'acme';

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
