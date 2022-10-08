import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = "";
  aniosE: string = "";
  descripcionE: string = "";

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreE, this.aniosE, this.descripcionE);
    this.sEducacion.save(edu).subscribe(
      data=>{
      this.router.navigate([""]);
      }, err => {
        alert("No se ha podido añadir la educacion");
      }
    )
  }

}
