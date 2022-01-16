import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepassed'
})
export class TimepassedPipe implements PipeTransform {

  transform(value: any): any {
    let counter:any;
    let currentTime:any = new Date();
    const second = 1000;
    var timeDiff = Math.abs(value - currentTime)/second;

    let timeInterval:any = { // in seconds
      'secs':1,
      'mins':60*1,
      'hrs':60*60,
      'days':60*60*24,
      'weeks':60*60*24*7,
      'months':60*60*24*30,// Assume every month has 30 days
      'years':60*60*24*365,// a yeah has 365 days
    }
     for(let i in timeInterval){
       counter = Math.floor( timeDiff/timeInterval);
        if (counter > 0){
          return `${counter} ${i} ago`
        }
     }

    return value;
  }

}
