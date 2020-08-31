import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repo } from '../classes/repo';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
})
export class RepoDetailsComponent implements OnInit {
  repositories: Repo;

  constructor(private repoService: RepoService) {}

  ngOnInit(): void {}
}
