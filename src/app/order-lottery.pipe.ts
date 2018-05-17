import { Pipe, PipeTransform } from '@angular/core';
import { Draw } from './types';

@Pipe({
  name: 'orderLottery',
})
export class OrderLotteryPipe implements PipeTransform {
  getDate(draw: Draw) {
    return new Date(draw.DrawDate.split(' ')[0]).getTime();
  }
  transform(draws: Draw[]): any {
    if (!draws || !draws.length) {
      return draws;
    }
    return draws.sort((a, b) => {
      if (this.getDate(a) - this.getDate(b) > 0) {
        return -1;
      } else if (this.getDate(a) - this.getDate(b) < 0) {
        return 1;
      } else {
        return b.Jackpot - a.Jackpot;
      }
    });
  }
}
