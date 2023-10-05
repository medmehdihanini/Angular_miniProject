import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ListUserComponentComponent } from './list-user-component.component';
import {BrowserModule} from "@angular/platform-browser";

describe('ListUserComponentComponent', () => {
  let component: ListUserComponentComponent;
  let fixture: ComponentFixture<ListUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserComponentComponent ],
      imports: [
        BrowserModule,
        FormsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
