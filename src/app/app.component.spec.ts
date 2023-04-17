import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the sidebar', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CountrieApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CountrieApp');
  });

});
