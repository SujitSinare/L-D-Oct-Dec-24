import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  username: string = "";

  childmessage: string = '';

  receiveMessage(msg: string) {
    this.childmessage = msg;
  }

}
