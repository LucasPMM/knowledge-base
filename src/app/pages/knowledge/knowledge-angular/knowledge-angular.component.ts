import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Knowledge } from 'src/app/models/knowledge';
import { HighlightService } from 'src/app/services/highlight/highlight.service';

@Component({
  selector: 'app-knowledge-angular',
  templateUrl: './knowledge-angular.component.html',
  styleUrls: ['./knowledge-angular.component.scss']
})
export class KnowledgeAngularComponent implements OnInit, AfterViewChecked {

  public knowledgeObj: Knowledge = {
    title: 'CSS',
    knowledges: [
      {
        sectionTitle: 'Estilização de elementos html',
        description: 'Vamos estudar parágrafos',
        code: [
          {
            code:
            `
              p {
                color:  red;
              }
            `,
            codeLanguage: 'language-css',
            codeDescription: 'Estamos estilizando a cor de um parágrafo',
          },
          {
            code:
            `
              div {
                color:  blue;
              }
            `,
            codeLanguage: 'language-css',
            codeDescription: 'Estamos estilizando a cor de uma div',
          },
        ],
      },
    ],
  };

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
