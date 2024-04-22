import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}
@NgModule({
  declarations: [ReversePipe],
  exports: [ReversePipe],
})
export class ReversePipeModule {}