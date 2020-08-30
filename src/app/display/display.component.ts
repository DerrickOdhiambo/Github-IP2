import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  response: User[];

  constructor(private gitService: GitServiceService) {}

  search(searchName: string) {
    console.log(searchName);
    this.gitService.searchUser(searchName).subscribe((response: any) => {
      console.log(response);
      this.response = response;
    });
  }
  ngOnInit(): void {}
}
