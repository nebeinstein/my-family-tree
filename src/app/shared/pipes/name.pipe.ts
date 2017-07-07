import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'name'
})
export class NamePipe implements PipeTransform {

    transform(value: string[]): any {
        var finalName: string = '';
        if (value.length === 2) {
            finalName = value[1] + ', ' + value[0];
        } else if (value.length === 3) {
            finalName = value[2] + ', ' + value[0] + ' ' + value[1];
        }
        return finalName;
    }
}