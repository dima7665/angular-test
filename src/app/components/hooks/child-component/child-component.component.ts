import {Component, Input, OnInit, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges, DoCheck {
    @Input() public value: string = '';

    public ngOnChanges(): void {
        console.log('child OnChanges', this.value);
    }

    public ngOnInit(): void {
        console.log('child OnInit', this.value);
    }

    public ngDoCheck(): void {
        console.log('child DoCheck', this.value);
    }
}
