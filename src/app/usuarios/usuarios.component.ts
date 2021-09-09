import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = ['luzdeleon', 'ruffles123', 'candy8'];

  constructor() { }

  ngOnInit(): void {
  }

}
