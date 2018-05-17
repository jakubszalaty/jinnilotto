import { Component, OnInit } from '@angular/core';
import { LotteryService } from './lottery.service';
import { Draw } from './types';
import { Observable } from 'rxjs';
import { WindowRefService } from './window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  draws$: Observable<Draw[]>;
  isLangDE = false;

  constructor(private lotteryService: LotteryService, private windowRef: WindowRefService) {}

  ngOnInit(): void {
    this.draws$ = this.lotteryService.getDraws();
    this.isLangDE = this.windowRef.browserLang === 'de';
  }
}
