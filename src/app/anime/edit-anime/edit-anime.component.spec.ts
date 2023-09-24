import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnimeComponent } from './edit-anime.component';

describe('EditAnimeComponent', () => {
  let component: EditAnimeComponent;
  let fixture: ComponentFixture<EditAnimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAnimeComponent]
    });
    fixture = TestBed.createComponent(EditAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
