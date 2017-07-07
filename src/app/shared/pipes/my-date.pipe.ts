import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

    transform(value: string): any {
        if (value.length === 0) {
            return value;
        }
        return value.slice(0,2) + '/' + value.slice(2,4) + '/' + value.slice(4,value.length);


    }
}