import { Component, OnInit } from '@angular/core';
// import { Student } from 'src/app/model/student';
import { Vehiculo } from 'src/app/model/vehiculo';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vehiculosList: Vehiculo[] = [];
  vehiculoObj: Vehiculo = {
    id: '',
    categoria : '',
    placa : '',
    propietario : '',
    hora : ''
  };
  id: string = '';
  categoria : string = '';
  placa : string = '';
  propietario : string = '';
  hora : string = '';

  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  // register() {
  //   this.auth.logout();
  // }

  // getAllStudents() {

  //   this.data.getAllStudents().subscribe(res => {

  //     this.studentsList = res.map((e: any) => {
  //       const data = e.payload.doc.data();
  //       data.id = e.payload.doc.id;
  //       return data;
  //     })

  //   }, err => {
  //     alert('Error while fetching student data');
  //   })

  // }

  // resetForm() {
  //   this.id = '';
  //   this.first_name = '';
  //   this.last_name = '';
  //   this.email = '';
  //   this.mobile = '';
  // }

  // addStudent() {
  //   if (this.first_name == '' || this.last_name == '' || this.mobile == '' || this.email == '') {
  //     alert('Fill all input fields');
  //     return;
  //   }

  //   this.studentObj.id = '';
  //   this.studentObj.email = this.email;
  //   this.studentObj.first_name = this.first_name;
  //   this.studentObj.last_name = this.last_name;
  //   this.studentObj.mobile = this.mobile;

  //   this.data.addStudent(this.studentObj);
  //   this.resetForm();

  // }

  // updateStudent() {

  // }

  // deleteStudent(student: Student) {
  //   if (window.confirm('Are you sure you want to delete ' + student.first_name + ' ' + student.last_name + ' ?')) {
  //     this.data.deleteStudent(student);
  //   }
  // }
  
  obtenerVehiculos() {

    this.data.obtenerVehiculos().subscribe(res => {

      this.vehiculosList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching vehicle data');
    })

  }

  resetForm() {
    this.id = '';
    this.categoria = '';
    this.placa = '';
    this.propietario = '';
    this.hora = '';
  }

  agregarVehiculo() {
    // if (this.categoria == '' || this.placa == '' || this.propietario == '' || this.hora == '') {
    //   alert('Fill all input fields');
    //   return;
    // }

    if (this.categoria == '' || this.placa == '' || this.propietario == '' || this.hora == '') {
      Swal.fire({
        title: 'Campos vacios',
        text: 'Debe llenar todos los campos',
        icon: 'info',
      })
      return;
    }

    this.vehiculoObj.id = '';
    this.vehiculoObj.categoria = this.categoria;
    this.vehiculoObj.placa = this.placa;
    this.vehiculoObj.propietario = this.propietario;
    this.vehiculoObj.hora = this.hora;

    this.data.agregarVehiculo(this.vehiculoObj);
    this.resetForm();

  }

  updateStudent() {

  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea borrar el registro con placa: "${vehiculo.placa}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    })
    // if (window.confirm('Are you sure you want to delete ' + vehiculo.categoria + ' ' + vehiculo.placa + ' ?')) {
    //   this.data.eliminarVehiculo(vehiculo);
    // }

    .then((result) => {
      if (result.isConfirmed) {
        // if (window.confirm('Are you sure you want to delete ' + vehiculo.categoria + ' ' + vehiculo.placa + ' ?')) {
          this.data.eliminarVehiculo(vehiculo);
        // }
      } else {
        return;
      }
    })
  }


  /**
    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea borrar el prodcuto "${nombre}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this._productoService.eliminarProducto(id).subscribe(data => {
          this.toastr.error('El producto fue eliminado con éxito', 'Producto Eliminado');
          this.obtenerProductos();
        }, error => {
          console.log(error);
        })
      } else {
        return;
      }
    })
   */

  filterVehiculo = '';

}
