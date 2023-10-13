import { Component, Input, Output,OnChanges, EventEmitter, SimpleChanges,} from '@angular/core';
import { DatePipe, NgIf } from '@angular/common';
import { Article } from '../article';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [FormsModule, NgIf, DatePipe],
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnChanges {
  @Input()
  article: Article = new Article();

  @Output()
  deleteArticle: EventEmitter<Article> = new EventEmitter<Article>();

  @Output()
  updateArticle: EventEmitter<Article> = new EventEmitter<Article>();

  isEdit: boolean = false;
  originalItem: Article = new Article();

  onDeleteArticle(): void {
    this.deleteArticle.emit(this.article);
  }

  onEditTitle(): void {
    this.updateArticle.emit(this.article);
  }

  onCancel(): void {
    this.article = Object.assign({}, this.originalItem);
    this.isEdit = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['article']) {
      this.originalItem = changes['article'].currentValue;
      this.article = Object.assign({}, this.originalItem);
    }
  }

}
