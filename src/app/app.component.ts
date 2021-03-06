import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {  map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  news: any = [];

  constructor(private carsService: NewsService) {}

  ngOnInit() {
    this.carsService.getNews()
      .subscribe((response) => {
        const data = response;
        this.news = data;
      });
  }

  addNews() {
    this.carsService.getNews()
      .subscribe((response) => {
      const data = response;
      this.news = data;
    });
  }

  addBBCNews() {
    this.carsService.getBBCNews()
      .subscribe((response) => {
        const data = response;
        this.news = data;
      });
  }

  addArsNews() {
    this.carsService.getArsNews()
      .subscribe((response) => {
        const data = response;
        this.news = data;
      });
  }

  addInsiderNews() {
    this.carsService.getInsiderNews()
      .subscribe((response) => {
        const data = response;
        this.news = data;
      });
  }

  addCNNNews() {
    this.carsService.getCNNNews()
      .subscribe((response) => {
        const data = response;
        this.news = data;
      });
  }

  addEntertainmentNews() {
    this.carsService.getEntertainmentNews()
      .subscribe((response) => {
        const data = response;
        this.news = data;
      });
  }
}
