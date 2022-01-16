import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepassed'
})
export class TimepassedPipe implements PipeTransform {

  transform(value: any): any {
    let currentTime: any = new Date();
    const second = 1000;
    let counter: any;

    let timeInterval: any = { // in seconds
      'years': 60 * 60 * 24 * 365,// a yeah has 365 days
      'months': 60 * 60 * 24 * 30,// Assume every month has 30 days 
      'weeks': 60 * 60 * 24 * 7,
      'days': 60 * 60 * 24,
      'hrs': 60 * 60,
      'mins': 60 * 1,
      'secs': 1
    };

    if (value) {
      let timeDiff = Math.abs(currentTime - +new Date(value)) / second;
      if (timeDiff < 10)
        return 'Just created now'
      for (let i in timeInterval) {
        counter = Math.floor(timeDiff / timeInterval[i]);
        if (counter > 0) {
          return counter + ' ' + i + ' ' + 'ago';
        }
      }
    }
    return value;
  }
}

