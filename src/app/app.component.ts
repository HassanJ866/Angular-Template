import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ratings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBanners();
  }

  fetchBanners(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/').subscribe(
      (data) => {
        this.ratings = data;
        console.log('Results:', this.ratings);
      },
      (error) => {
        console.error('Error fetching results', error);
      }
    );
  }
}
