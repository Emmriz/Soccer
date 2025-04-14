import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-section.component.html',
  styleUrl: './body-section.component.css',
})
export class BodySectionComponent implements OnInit {

  matchData: any = {}; // Store match data
  loading: boolean = true;
  error: string | null = null;

  constructor(private footballService: FootballService) {}

  ngOnInit(): void {
    this.footballService.getMatchData().subscribe(
      (response) => {
        this.matchData = response; // Assuming the response contains necessary details
        this.loading = false;
      },
      (error) => {
        this.error = 'Error fetching match data';
        this.loading = false;
      }
    );
  }

}
