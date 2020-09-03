import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-app-element',
  templateUrl: './app-element.component.html',
  styleUrls: ['./app-element.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppElementComponent implements OnInit {
  
  @Input() data: string;
  dataObj;
  text;
  energy;
  page = 1;
  list = ["a1", "a2"];

  ngOnInit(): void {
    if (this.data) {
      // convert data string to object
      this.dataObj = JSON.parse(this.data);
      this.energy = this.dataObj.output.final_energy
    }
  }

  click1() {
    // window.alert("Hello!")
    this.text = "Hello!"
    this.page = this.page % 2 + 1
  }
}
