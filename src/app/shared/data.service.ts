import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileMetaData } from '../model/file-meta-data';
import { Student } from '../model/student';
import { Vehiculo } from '../model/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add student
  // addStudent(student : Student) {
  //   student.id = this.afs.createId();
  //   return this.afs.collection('/Students').add(student);
  // }

  // Agregar Vehiculo
  agregarVehiculo(vehiculo : Vehiculo) {
    vehiculo.id = this.afs.createId();
    return this.afs.collection('/Vehiculos').add(vehiculo);
  }

  // get all students
  // getAllStudents() {
  //   return this.afs.collection('/Students').snapshotChanges();
  // }

  // Obtener Vehiculos
  obtenerVehiculos() {
    return this.afs.collection('/Vehiculos').snapshotChanges();
  }

  // delete student
  // deleteStudent(student : Student) {
  //    this.afs.doc('/Students/'+student.id).delete();
  // }

  // Eliminar VEhiculo
  eliminarVehiculo(vehiculo : Vehiculo) {
     this.afs.doc('/Vehiculos/'+vehiculo.id).delete();
  }

  // update student
  // updateStudent(student : Student) {
  //   this.deleteStudent(student);
  //   this.addStudent(student);
  // }

  // Actualizar Vehiculo
  actualizarVehiculo(vehiculo : Vehiculo) {
    this.eliminarVehiculo(vehiculo);
    this.agregarVehiculo(vehiculo);
  }
    
}
