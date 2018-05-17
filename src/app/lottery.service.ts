import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Draw } from './types';

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  constructor(private httpClient: HttpClient) {}

  getDraws() {
    return this.httpClient.get<Draw[]>(`${environment.serverURL}/draws.json`);
  }
}
