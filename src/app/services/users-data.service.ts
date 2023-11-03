import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http : HttpClient) {}

  getGitHubUsers() {
    return this.http.get('http://api.github.com/users');
  };

  getUser(githubUsername : string) {
    return this.http.get(`http://api.github.com/users/${githubUsername}`)
  };

  getGitHubUsersLimeted(count : number) {
    return this.http.get(`http://api.github.com/users?per_page=${count}`)
  };

}
