import { Directive } from '@angular/core';

@Directive({
  selector: '[capitalize]',
    host: { style: 'text-transform: capitalize' },
    standalone: true,
})
export class CapitalizeDirective {

  constructor() { }

}
