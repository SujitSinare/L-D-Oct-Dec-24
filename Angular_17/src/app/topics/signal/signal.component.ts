import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firstName = signal("Virat");
  lastName = signal("Kohli");

  fullName = computed(() => this.firstName() + " " + this.lastName())

  courseName: string = "Cricket";

  cityList = signal(["Pune", 'Mumbai']);
  studentObj = signal({
    name: 'Rohit',
    city: 'Pune'
  })

  changeStudetnCity() {
    this.studentObj.set({ ...this.studentObj(), city: 'Mumbai' });
  }
  addCity() {
    this.cityList.set([...this.cityList(), "Nagpur"]);
  }

  changeName() {
    this.firstName.set("Sachin");
  }

  changeLastName() {
    this.lastName.set("Tendulkar");
  }
}
