import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
    standalone: true,
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiplyBy: number = 2): unknown {
    return value * multiplyBy;
  }

}
