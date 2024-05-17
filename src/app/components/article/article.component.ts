import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
})
export class Article {
  @Input()
  rootClassName: string = ''
  @Input()
  image: string = 'https://play.teleporthq.io/static/svg/default-img.svg'
  @Input()
  header: string = 'Understand your customers'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  constructor() {}
}
