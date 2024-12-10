import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'
import {GetSchoolResponseInterface, School, SchoolDetail, SchoolDetails} from '../types/getSchoolResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  url = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json'
  detail = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json'
  constructor(private http: HttpClient) {}

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.url)
  }

  getSchoolDetail(schoolId:string): Observable<SchoolDetail> {
    return this.http.get<SchoolDetails>('https://data.cityofnewyork.us/resource/f9bf-2cp4.json?dbn='+schoolId).pipe(
      map(res => {
       return res[0];
      })
    );
  }
}
