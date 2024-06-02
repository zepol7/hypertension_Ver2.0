import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(
    private router:Router
  )
  {}

  showLoadingScreen: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showLoadingScreen = false;
      if(this.showLoadingScreen == false){
        this.router.navigate(['home']);
      }
    }, 3000);
    
  }

}
