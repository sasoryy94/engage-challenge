import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LabourCosts } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LabourTableService {
  constructor(private http: HttpClient) {}

  url: string = `${environment.apiURL}/labourstats`;

  getDataLabour() {
    return this.http.get<LabourCosts[]>(this.url);
  }
}
