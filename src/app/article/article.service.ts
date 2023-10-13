import { Injectable, inject } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  onDeleteArticle(article: Article): Observable<Article> {
    return this.http.delete<Article>(`${this.apiUrl}/${article.id}`);
}

  getArticle():Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}`);
  }
  setUrl(arg: string) {
    this.apiUrl = arg
  }

  private http: HttpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:4200/api/articles';

  // getData(): Observable<Article[]> {
  //   return this.http.get<Article[]>(`${this.apiUrl}`);
  // }
}
