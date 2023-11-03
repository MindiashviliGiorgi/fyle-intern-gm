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

  searchedUser: boolean = false;
  searchedUserGif: boolean = false;

  constructor(private usersDataService : UsersDataService) {}

  ngOnInit(): void {};
  
  getUsers() {
    this.usersDataService.getGitHubUsers()
    .subscribe((data) => {
      this.usersData = data;
    })
  };

  getUser() {
    this.searchedUser = false;
    this.searchedUserGif = true;
    this.usersDataService.getUser(this.userName)
    .subscribe((user) => {
      this.userName = user;
      console.log(this.userName )
    });
    this.searchedUser = true;
    setTimeout(() => {
      this.searchedUserGif = false;
    }, 500);
  };

  getLittleLimitedUsers() {
    this.usersDataService.getGitHubUsersLimeted(this.littleLimitedUsers)
    .subscribe()
  }

}
