import { Injectable, inject } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:4200/api/articles';

  onDeleteArticle(article: Article): Observable<Article> {
    return this.http.delete<Article>(`${this.apiUrl}/${article.id}`);
}

  getArticle():Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}`);
  }

  onUpdateArticle(article: Article):Observable<Article>{
    return this.http.put<Article>(`${this.apiUrl}/${article.id}`, article);
  }

  setUrl(arg: string) {
    this.apiUrl = arg
  }
}
