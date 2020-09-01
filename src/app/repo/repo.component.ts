import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repo } from '../classes/repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  constructor(private repoService: RepoService) {}
  repositories: Repo[];
  repoName: any;
  error: String;

  searchRepo(repoName: any) {
    console.log(this.repoName);
    this.repoService.getRepo(repoName).subscribe((data: any) => {
      console.log(data['items']);
      this.repositories = data['items'];
    });
  }
  ngOnInit(): void {}
}
