import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4ea254fb0f2c483780981a67bee871fc');
  }

  getBBCNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4ea254fb0f2c483780981a67bee871fc')
  }
}
