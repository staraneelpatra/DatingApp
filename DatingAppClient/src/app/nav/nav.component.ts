import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {};
  //loggedIn: boolean =false;
  //currentUser$: Observable<User | null> = of(null)

  constructor(public accountService: AccountService) {};

  ngOnInit(): void { 
    //this.getCurrentUser();  
    //this.currentUser$ = this.accountService.currentUser$; 
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     next: satya => this.loggedIn = !!satya,
  //     error: error => console.log(error)
  //   })
  // }

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        //this.loggedIn = true;
      },
      error: error => console.error(error) 
    })
  }
  logout(){
    this.accountService.logout();
    //this.loggedIn =false;
  }
}
