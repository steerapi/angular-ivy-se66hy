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

  ngOnInit(): void {
    if (this.data) {
      // convert data string to object
      this.dataObj = JSON.parse(this.data);
    }
  }
}
