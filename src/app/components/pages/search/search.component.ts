import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { SearchInterface } from 'src/app/services/search/search.interface';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  loading: boolean = false;
  query: string = '';
  foods: any = [];

  constructor(private service: SearchService) {}

  ngOnInit(): void {}

  getSearch() {
    this.loading = true;
    this.service
      .search(this.query)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: SearchInterface) => {
        this.foods = data.results;
      });
  }
}
