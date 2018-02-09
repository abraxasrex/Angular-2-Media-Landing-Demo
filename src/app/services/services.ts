import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

const configUrl = `assets/data.json`;

@Injectable()
export default class MockDataService {
  constructor(private http: HttpClient) { }
  getMockData () {
      return this.http.get(configUrl);
  }
}