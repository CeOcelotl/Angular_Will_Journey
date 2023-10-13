import { Component, inject } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { ArticleHeaderComponent } from '../article-header/article-header.component';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleBodyComponent, ArticleHeaderComponent, NgFor,HttpClientModule,],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent {
  articleService: ArticleService = inject(ArticleService);

  articles: Article[] = [];

  constructor() {
    this.articleService.setUrl('http://localhost:3000/articles/');

    this.articleService.getArticle().subscribe((x) => {
      this.articles = x;
    });
  }

  onDeleteArticle(article: Article): void {
    this.articleService.deleteArticle(article).subscribe(() => {
      this.articles = this.articles.filter((x) => {
        return x.id !== article.id;
      });
    });
  }

  onUpdateArticle(article: Article): void {
    this.articleService.updateArticle(article).subscribe(() => {
      this.articles = this.articles.map((x) => {
        if (x.id == article.id) {
          return Object.assign({}, x, article);
        }
        return x;
      });
    });
  }
}
