import { Component, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [],
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent {
  @Input()
  article: Article = new Article();

}
