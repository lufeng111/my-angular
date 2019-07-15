import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdectDetailComponent } from './prodect-detail.component';

describe('ProdectDetailComponent', () => {
  let component: ProdectDetailComponent;
  let fixture: ComponentFixture<ProdectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
