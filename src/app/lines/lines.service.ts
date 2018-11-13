import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Lines } from './lines.class';
import { JsonResponse } from '../util/json-response.class';
const url = 'http://localhost:8080/PurchaseRequestLineItems/';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  list(): Observable <JsonResponse> {
    return this.http.get(url+"List") as Observable<JsonResponse>;
  }
  add(lines: Lines): Observable<JsonResponse> {
      return this.http.post(url+"Add", lines) as Observable<JsonResponse>;
  } 
  get(id): Observable<JsonResponse> {
    return this.http.get(url+"Get/?id="+id) as Observable<JsonResponse>;
  }
  remove(lines: Lines): Observable<JsonResponse> {
      return this.http.post(url+"Remove", lines) as Observable<JsonResponse>;
  }
  change(lines: Lines): Observable<JsonResponse> {
		return this.http.post(url+"Change", lines) as Observable<JsonResponse>;
  }
  getPrli(id): Observable<JsonResponse> {
    return this.http.get(url+"LinesForPR/?id="+id) as Observable<JsonResponse>;
  }
  constructor(private http: HttpClient) { }
}