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
  itemsPerPage: number = 20;
  usersCount: number = 200;

  searchedUser: boolean = false;
  searchedUserGif: boolean = false;

  constructor(private usersDataService : UsersDataService) {}

  ngOnInit(): void {
    this.getUsers()
  };
  
  getUsers() {
    this.usersDataService.getGitHubUsers(this.usersCount)
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
    });
    this.searchedUser = true;
    setTimeout(() => {
      this.searchedUserGif = false;
    }, 500);
  };

  littleItemsPerPage() {
    this.itemsPerPage = 20;
  }

  manyItemsPerPage(){
    this.itemsPerPage = 100;
  }

}
