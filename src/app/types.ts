export interface DateWithTimezone {
  date: string;
  timeZone: string;
}

export interface Draw {
  DrawID: string;
  LotteryName: string;
  LotteryID: string;
  Jackpot: number;
  RoundedJackpot: number;
  DrawDate: string;
  WinningResult: string;
  LotteryCurrency: string;
  TimeZone: string;
  TimeToResolve: number;
  urlLotteryName: string;
  currency: string;
  jackpotAsString: string[];
  jackpotAsStringRounded: string[];
  jackpotAsStringRoundedDE: string[];
  winningNumbers: string[];
  winningNumbersAsStrting: string;
  extraNumbers: number[];
  extraNumbersAsString: string[];
  dateWithTimezone: DateWithTimezone;
}
