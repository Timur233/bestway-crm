import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Brand } from '../models/brand';
import { environment } from 'src/environments/environment';
import { ResponseHttp } from '../models/responseHttp';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  getBrands(): Observable<Brand[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/brands').pipe(
      map((data) => data.data.items),
      catchError((error) => throwError(error)),
    )
  }

  constructor(
    private http: HttpClient
  ) { }
}
