import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  deleteStud() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }

  addStud(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/student',data);
  }

  getStudList(): Observable<any>{
    return this._http.get('http://localhost:3000/student');
  }


  deleteStuddata(id:number): Observable<any>{
    return this._http.delete('http://localhost:3000/student / ${id}')
  }
  // deleteStud(id: number): Observable<any>{
  //   return this._http.delete('http://localhost:3000/student / ${id}');
  // }

}
