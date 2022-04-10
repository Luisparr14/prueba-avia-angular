import { Component, Input } from "@angular/core";
@Component({
  selector: "app-star",
  templateUrl: "../assets/icons/filters/star.html",
  styles:[`
  .star{
    width: 20px;
  }
  `]
})
export class StarComponent {
  @Input() fillColor!: string;  
}