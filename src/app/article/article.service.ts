import { Injectable } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(private http: HttpClient) {

  }
  getData(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:4200/api/articles.json');
  }
  run() {
    console.log('DataService');
  }

  doDelete(item: Article) {
    return this.http.delete('http://localhost:4200/api/articles/' + item.id);
  }

  doModify(post: Article) {
    return this.http.put('http://localhost:4200/api/articles/' + post.id, post);
  }
}
