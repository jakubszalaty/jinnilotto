import { Injectable } from '@angular/core';

function getWindow() {
  return window;
}

@Injectable({ providedIn: 'root' })
export class WindowRefService {
  get nativeWindow() {
    return getWindow();
  }
  get browserLang() {
    return this.nativeWindow.navigator.language;
  }
}
