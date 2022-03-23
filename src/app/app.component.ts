import { Component } from '@angular/core';
import { XyzComponent } from './xyz/xyz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentItem = 'Television';

  items = ['item1', 'item2', 'item3', 'item4'];

  gatrol= "totie"
  addItem(newItem: string) {
    this.gatrol=newItem
  }

}
