import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeIonicComponent } from './knowledge-ionic.component';

describe('KnowledgeIonicComponent', () => {
  let component: KnowledgeIonicComponent;
  let fixture: ComponentFixture<KnowledgeIonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeIonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
