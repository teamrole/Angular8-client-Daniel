import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheItemsComponent } from './detalhe-items.component';

describe('DetalheItemsComponent', () => {
  let component: DetalheItemsComponent;
  let fixture: ComponentFixture<DetalheItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
