// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';

import 'jasmine';
import { AppComponent } from './app.component';
 import {beforeEach, describe, flush, get, it,bootstrap, setupModule} from '@angular/catalyst';


describe('ProgressBar Component', () => {
  beforeEach((() => {
    setupModule({
      imports: [
          // This makes test faster and more stable.
      ],
    });
  }));

  it('should create the component', () => {
    const component = bootstrap(AppComponent);
    expect(component).toBeTruthy();
  });
});


// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

  // it(`should have as title 'sample-test'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('sample-test');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('sample-test app is running!');
  // });
// });
