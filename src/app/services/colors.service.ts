import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colors } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  ruta: string = "https://reqres.in/api/colors?page=";

  constructor(public http: HttpClient) { }

  readColors(pp): Observable<Colors[]>{
    //console.log("ruta-> " + this.ruta + pp);
    return this.http.get<Colors[]>(this.ruta + pp);
    //return this.http.get<Colors[]>(this.ruta);
  }

}
