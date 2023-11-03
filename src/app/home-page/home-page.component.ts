import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  usersData: any;
  userName: any;
  littleLimitedUsers: number = 20;
  manyLimitedUsers: number = 100;

  constructor(private usersDataService : UsersDataService) {}

  ngOnInit(): void {

  };
  
  getUsers() {
    this.usersDataService.getGitHubUsers()
    .subscribe((data) => {
      this.usersData = data;
    })
  };

  getUser() {
    this.usersDataService.getUser(this.userName)
    .subscribe((user) => {
      this.userName = user;
      console.log(this.userName )
    })
  };

  getLittleLimitedUsers() {
    this.usersDataService.getGitHubUsersLimeted(this.littleLimitedUsers)
    .subscribe()
  }



}
