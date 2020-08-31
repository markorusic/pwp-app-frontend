import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Ad } from '../../Ad'

@Component({
  selector: 'app-ad-item',
  templateUrl: './ad-item.component.html',
  styleUrls: ['./ad-item.component.css']
})
export class AdItemComponent implements OnInit {

  @Input() ad: Ad;
  @Output() update = new EventEmitter<Ad>();
  @Output() delete = new EventEmitter<Ad>();

  public showDetails: boolean;
  public editMode: boolean;

  constructor() {
    this.showDetails = false;
    this.editMode = false;
  }

  ngOnInit() { 
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  emitDeletingEvent() {
    if (!confirm('Da li ste sigurni da zelite da obrisete ovaj oglas?')) {
      return;
    }
    this.delete.emit(this.ad);
  }

  emitUpdatingEvent(ad: Ad) {
    this.update.emit({
      ...this.ad,
      ...ad
    });
    this.toggleEditMode();
  }

}
