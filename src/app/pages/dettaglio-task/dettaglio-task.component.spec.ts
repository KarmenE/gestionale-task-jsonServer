import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioTaskComponent } from './dettaglio-task.component';

describe('DettaglioTaskComponent', () => {
  let component: DettaglioTaskComponent;
  let fixture: ComponentFixture<DettaglioTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettaglioTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
