import { Injectable, inject } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  #http: HttpClient = inject(HttpClient);
  #apiUrl = '';

  deleteArticle(article: Article): Observable<Article> {
    return this.#http.delete<Article>(`${this.#apiUrl}/${article.id}`);
}

  getArticle():Observable<Article[]> {
    return this.#http.get<Article[]>(`${this.#apiUrl}`);
  }

  updateArticle(article: Article):Observable<Article>{
    return this.#http.put<Article>(`${this.#apiUrl}/${article.id}`, article);
  }

  setUrl(url: string) {
    this.#apiUrl = url
  }
}
