import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api.service';
import { AllOurMoviesComponent } from './all-our-movies.component';

describe('AllOurMoviesComponent', () => {
  let component: AllOurMoviesComponent;
  let fixture: ComponentFixture<AllOurMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllOurMoviesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOurMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
