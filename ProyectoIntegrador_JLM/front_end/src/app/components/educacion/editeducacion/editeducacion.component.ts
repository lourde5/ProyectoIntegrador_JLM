import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  editEdu : Educacion = null;

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.details(id).subscribe(
      data => {
        this.editEdu = data;
      }, err => {
        alert("No se pudo editar la educación.");
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.editEdu).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo editar la educación.");
      }
    )
  }

}
