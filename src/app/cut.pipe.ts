import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(str: any, size: number) {
    return (str.lenth < size) ? str : (str.substr(0, size) + ' . . .');
  }
}
