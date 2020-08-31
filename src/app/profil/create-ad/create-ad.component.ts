import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Ad } from '../../Ad';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  @Input() ad: Ad;
  @Output() submited = new EventEmitter();

  public title: string;
  public description: string;
  public price: number;

  constructor() { }

  ngOnInit() {
    if (this.ad) {
      this.title = this.ad.title;
      this.description = this.ad.description;
      this.price = this.ad.price;
    }
  }

  onSubmit() {
    this.submited.emit({
      title: this.title,
      description: this.description,
      price: this.price
    });
  }

}
