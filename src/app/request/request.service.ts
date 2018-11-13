import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Request } from './request.class';
import { JsonResponse } from '../util/json-response.class';
const url = 'http://localhost:8080/PurchaseRequests/';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  list(): Observable<JsonResponse> {
    return this.http.get(url +'List') as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url +'Get/?id=' +id) as Observable<JsonResponse>;
  }
  add(request: Request): Observable<JsonResponse> {
    return this.http.post(url +'Add', request) as Observable<JsonResponse>
  }
  change(request: Request): Observable<JsonResponse> {
    return this.http.post(url +'Change', request) as Observable<JsonResponse>
  }
  remove(request: Request): Observable<JsonResponse> {
    return this.http.post(url +'Remove', request) as Observable<JsonResponse>
  }
  lines(id): Observable<JsonResponse> {
    return this.http.post('http://localhost:8080/PurchaseRequestLineItems/LinesForPR/?id=', +id) as Observable<JsonResponse>
  }
  submit(request: Request): Observable<JsonResponse> {
    return this.http.post(url +'SubmitForReview', request) as Observable<JsonResponse>
  }
  getPRsForReview(id: number): Observable<JsonResponse> {
    return this.http.get(url +'ListReview/?id=' +id) as Observable<JsonResponse>
  }
  approve(request: Request): Observable<JsonResponse> {
    return this.http.post(url +'ApprovePR', request) as Observable<JsonResponse>
  }
  reject(request: Request): Observable<JsonResponse> {
    return this.http.post(url +'RejectPR', request) as Observable<JsonResponse>
  }
  constructor(private http: HttpClient) {
  }
}