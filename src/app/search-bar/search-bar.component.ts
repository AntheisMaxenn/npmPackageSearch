import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// service import
import { NpmPackageData, NpmSearchService } from '../services/npm-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [ NpmSearchService ]
})
export class SearchBarComponent implements OnInit{

  packages$!: Observable<NpmPackageData[]>;

  private searchText$ = new Subject<string>();


  constructor(private searchService: NpmSearchService) { }


  search(input: string){
    this.searchText$.next(input);
    // console.log(searchText);
  }

  ngOnInit() {
   this.packages$ = this.searchText$.pipe(
    debounceTime(3000),
    distinctUntilChanged(),
    switchMap(searchText => this.searchService.search(searchText))
   );

   console.log(this.packages$);
  }

  openPackageLink(name: string){
    window.open('https://www.npmjs.com/package/'+name, "_blank");
  }

}
