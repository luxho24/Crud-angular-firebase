import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultVehiculo = [];
    for (const vehiculo of value) {
      if (vehiculo.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1 || vehiculo.placa.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        // console.log('sip');
        resultVehiculo.push(vehiculo);
      }
    }
    return resultVehiculo;
  }

}
