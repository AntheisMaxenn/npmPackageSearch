import { Injectable } from '@angular/core';


import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


export interface NpmPackageData {
  name: string;
  version: string;
  description: string;
}

export const searchUrl = 'https://npmsearch.com/query';

function createOptions(phrase){

  // 
  let params = new HttpParams({fromObject: {q: phrase}});
  // params.set('p','popularity')
  // const params = new HttpParams({phrase});
  const headers = new HttpHeaders();

  return {params, headers};
}


@Injectable()
export class NpmSearchService {

  constructor(private http: HttpClient) {  }


  search(searchTerm: string): Observable<NpmPackageData[]>{

    // TODO return Null[] if searchTerm is void
    if(!searchTerm.trim()) {return of([])}

    // Create Http Options for http.get(url, params)
    const httpOptions =  createOptions(searchTerm);

    // return http  with required Interface 
    // return this.http.get(searchUrl, httpOptions).pipe(
    //   map(data => {
    //     return {
    //       data.results.map((entry: any) => ({
    //         name: entry.name[0],
    //         version: entry.version[0],
    //         description: entry.description[0]
    //     } as NpmPackageData
    //   })
    return this.http.get(searchUrl, httpOptions).pipe(
      map((data: any) => {
        return data.results.map((entry: any) => ({
            name: entry.name[0],
            version: entry.version[0],
            description: entry.description[0]
          } as NpmPackageData )
        );
      })
      // catchError(this.handleError('search', []))
    );

  }


}
