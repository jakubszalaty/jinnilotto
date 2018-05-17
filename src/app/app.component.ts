import { Component, OnInit } from '@angular/core';
import { LotteryService } from './lottery.service';
import { Draw } from './types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  draws$: Observable<Draw[]>;
  isLangDE = false;
  constructor(private lotteryService: LotteryService) {}

  ngOnInit(): void {
    this.draws$ = this.lotteryService.getDraws();
  }
}
