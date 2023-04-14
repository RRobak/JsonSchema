import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDisplayerComponent } from './schema-displayer.component';

describe('SchemaDisplayerComponent', () => {
  let component: SchemaDisplayerComponent;
  let fixture: ComponentFixture<SchemaDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
