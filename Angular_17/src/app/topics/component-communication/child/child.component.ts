import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Method implemented.',changes);
  }

  @Input() parentText: string = "";
  @Input() parentText1: string = "";

  childusername: string = "";

  @Output() messageEmitter = new EventEmitter<string>();

  sendMessage() {
    this.messageEmitter.emit(this.childusername);
  }

}
