import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    let phone: string = value;
    if (!/^[0-9]*$/.test(phone)) {
      phone = '';
    }
    if (phone[0] === '0') {
      phone = phone.substring(1);
    }
    if (phone.length > 9) {
      phone = phone.substring(0, 9);
    }

    return '+(33)' + phone;
  }
}
