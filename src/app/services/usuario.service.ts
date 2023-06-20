import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: "fpascual", nombre: 'Fernando', apellido: 'Pascual', sexo: 'Masculino' },
    { usuario: "lhamilton", nombre: 'Luis', apellido: 'Hamilton', sexo: 'Masculino' },
    { usuario: "izanazi", nombre: 'Ianina', apellido: 'Zanazi', sexo: 'Femenino' },
    { usuario: "falonso", nombre: 'Fernando', apellido: 'Alonso', sexo: 'Masculino' },
    { usuario: "mverstapen", nombre: 'Max', apellido: 'Verstapen', sexo: 'Masculino' },
    { usuario: "linhamilton", nombre: 'Linda', apellido: 'Hamilton', sexo: 'Femenino' },
    { usuario: "jconnor", nombre: 'Jhon', apellido: 'Connor', sexo: 'Masculino' },
    { usuario: "t800", nombre: 'Terminator', apellido: 'Desconocido', sexo: 'Otro' },
    { usuario: "aschwarzenegger", nombre: 'Arnold', apellido: 'Schwarzeneggers', sexo: 'Masculino' },
    { usuario: "rpatrick", nombre: 'Robert', apellido: 'Patrick', sexo: 'Masculino' },
    { usuario: "t1000", nombre: 'Terminator', apellido: 'Desconocido', sexo: 'Otro' },
    { usuario: "adearmas", nombre: 'Anna', apellido: 'DeArmas', sexo: 'Femenino' },
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
