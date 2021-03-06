import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { RepoService } from '../repo.service';
import { Repo } from '../classes/repo';
import { User } from '../classes/user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  user: User[] = [
    {
      name: 'Derrick Odhiambo',
      id: 67064766,
      avatar: 'https://avatars0.githubusercontent.com/u/67064766?v=4',
      repo: 23,
      followers: 1,
    },
  ];
  response: User[];
  repos: Repo[];

  constructor(
    private gitService: GitServiceService,
    private repoService: RepoService
  ) {}

  userName: string;
  clear() {
    this.userName = '';
  }
  //repo http request
  getRepository() {
    const input = this.userName;
    this.repoService.getUserData(input).subscribe((data) => {
      console.log(data);
      this.repos = data;
    });
  }

  error: String;

  //user http request
  search(searchName: string) {
    console.log(searchName);
    this.gitService.searchUser(searchName).subscribe(
      (response: any) => {
        console.log(response);
        this.response = response;
      },
      (error) => {
        console.log(error);
        this.error = error;
        alert(error);
      }
    );
  }
  showMe: boolean = true;
  toogle() {
    this.showMe = false;
  }
  ngOnInit(): void {}
}
