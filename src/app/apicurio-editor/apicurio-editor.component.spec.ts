import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicurioEditorComponent } from './apicurio-editor.component';

describe('ApicurioEditorComponent', () => {
  let component: ApicurioEditorComponent;
  let fixture: ComponentFixture<ApicurioEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApicurioEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicurioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
