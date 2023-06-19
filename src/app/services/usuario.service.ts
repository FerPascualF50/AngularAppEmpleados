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
    { usuario: "anpascual", nombre: 'Ana', apellido: 'Pascual', sexo: 'Femenino' },
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
}
