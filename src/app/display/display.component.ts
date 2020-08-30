import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(private gitService: GitServiceService) {}

  search(searchName: string) {
    console.log(searchName);
    this.gitService.searchUser(searchName).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.gitService.getUserData().subscribe((data) => {
      console.log(data);
    });
  }
}
