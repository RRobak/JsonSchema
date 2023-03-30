import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaGeneratorContainerComponent } from './schema-generator-container.component';

describe('SchemaGeneratorContainerComponent', () => {
  let component: SchemaGeneratorContainerComponent;
  let fixture: ComponentFixture<SchemaGeneratorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaGeneratorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaGeneratorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
