import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ArticleBodyComponent } from '../article-body/article-body.component';
import { ArticleHeaderComponent } from '../article-header/article-header.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule,ArticleBodyComponent,ArticleHeaderComponent],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articleService: ArticleService = inject(ArticleService);

  articles: Article[] = [];

}
