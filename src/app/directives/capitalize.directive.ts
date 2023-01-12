import {Directive, DoCheck, OnChanges, OnInit} from '@angular/core';

@Directive({
  selector: '[capitalize]',
    host: { style: 'text-transform: capitalize' },
    standalone: true,
})
export class CapitalizeDirective implements OnInit, OnChanges, DoCheck {
    public ngOnChanges(): void {
        console.log('directive OnChanges');
    }

    public ngOnInit(): void {
        console.log('directive OnInit');
    }

    public ngDoCheck(): void {
        console.log('directive DoCheck');
    }
}
