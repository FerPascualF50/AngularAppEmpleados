import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';



const listUsuario: Usuario[] = [
  {usuario: "fpascual", nombre: 'Fernando', apellido: 'Pascual', sexo: 'Masculino'},
  {usuario: "lhamilton", nombre: 'Luis', apellido: 'Hamilton', sexo: 'Masculino'},
  {usuario: "izanazi", nombre: 'Ianina', apellido: 'Zanazi', sexo: 'Femenino'},
  {usuario: "falonso", nombre: 'Fernando', apellido: 'Alonso', sexo: 'Masculino'},
  {usuario: "mverstapen", nombre: 'Max', apellido: 'Verstapen', sexo: 'Masculino'},
  {usuario: "anpascual", nombre: 'Ana', apellido: 'Pascual', sexo: 'Femenino'},
  

];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = listUsuario;

}
