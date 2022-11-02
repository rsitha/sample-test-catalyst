import { AppComponent } from './app.component';

import { beforeEach, bootstrap, describe, getEl, it, setupModule } from '@angular/catalyst';

describe('AppCatalystComponent', () => {
  beforeEach(() => {
    setupModule({
      declarations: [AppComponent],
    });
  });

  it('should create the app', () => {
    const app = bootstrap(AppComponent);
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample-test'`, () => {
    const app = bootstrap(AppComponent);
    expect(app.title).toEqual('sample-test');
  });

  it('should render title', () => {
    bootstrap(AppComponent);
    expect(getEl('.content span')?.textContent).toContain('sample-test app is running!');
  });
});
