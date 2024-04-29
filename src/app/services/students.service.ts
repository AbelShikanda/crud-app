import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpclient:HttpClient) { }

  saveStudent(inputData: object) {
    return this.httpclient.post('http://127.0.0.1:8000/api/students', inputData);
  }

}
