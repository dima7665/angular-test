import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
    standalone: true,
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiplyBy: number = 2, reverse: boolean = false): unknown {
    return reverse ? Math.round(1000 * value / multiplyBy) / 1000 : value * multiplyBy;
  }

}
