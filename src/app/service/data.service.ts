import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
baseUrl:string = "assets/csv";

constructor(private httpClient : HttpClient) {}

getProductsOri(): Observable<Product[]> {
  return this.httpClient.get<Product[]>(this.baseUrl + '/item_on_sale.csv').pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
  );
}

getProducts(): Observable<string> {
    return this.httpClient
      .get(this.baseUrl + '/item_on_sale.csv', { responseType: 'text' as 'text' }).pipe(
        // tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
}

private handleError(err: HttpErrorResponse) {

  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
  } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(() => new Error(errorMessage));
}

}