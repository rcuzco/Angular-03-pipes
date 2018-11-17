import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform
{
  constructor(private domSanitizer:DomSanitizer)
  {

  }

  transform(value: string, args?: string): any
  {
    console.log(args);
    console.log(value);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(args + value);
  }

}
