import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeAngularComponent } from './knowledge-angular.component';

describe('KnowledgeAngularComponent', () => {
  let component: KnowledgeAngularComponent;
  let fixture: ComponentFixture<KnowledgeAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
