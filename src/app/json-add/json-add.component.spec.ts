import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAddComponent } from './json-add.component';

describe('JsonAddComponent', () => {
  let component: JsonAddComponent;
  let fixture: ComponentFixture<JsonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
