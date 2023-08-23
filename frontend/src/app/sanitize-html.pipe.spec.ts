import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

describe('SanitizeHtmlPipePipe', () => {
  it('create an instance', inject([ DomSanitizer ], (_sanitizer: DomSanitizer) => {
    const pipe = new SanitizeHtmlPipe(_sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
