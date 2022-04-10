import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface Filter {
  name: string;
  oneStar: boolean;
  twoStars: boolean;
  threeStars: boolean;
  fourStars: boolean;
  fiveStars: boolean;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterInfo: EventEmitter<Filter> = new EventEmitter<Filter>();
  constructor(
    private form: FormBuilder
  ) { }

  filterForm = this.form.group({
    nombre: '',
    allStars: true,
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.filterInfo.emit(this.filterForm.value);
    this.collapse();
  }

  collapse(): void {
    let x = document.getElementById("filter-i");
    if(x?.classList.contains("filter-items-collapse")){
      x.classList.remove("filter-items-collapse");
    }else{
      x?.classList.add("filter-items-collapse");
    }
  }
}
