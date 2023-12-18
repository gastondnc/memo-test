import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMemoComponent } from './grid-memo.component';

describe('GridMemoComponent', () => {
  let component: GridMemoComponent;
  let fixture: ComponentFixture<GridMemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridMemoComponent]
    });
    fixture = TestBed.createComponent(GridMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
