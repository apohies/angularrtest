import { Component, OnInit , Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  
  tropper = 0;
  constructor() {

    
   }
  
  ngOnInit(): void {
  }
  
  @Input() item = ''; // decorate the property with @Input()

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
  
  onclicker(casteo: string){

      this.item= casteo;
  }
}
