import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageListaComponent } from './homepage-lista.component';

describe('HomepageListaComponent', () => {
  let component: HomepageListaComponent;
  let fixture: ComponentFixture<HomepageListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
