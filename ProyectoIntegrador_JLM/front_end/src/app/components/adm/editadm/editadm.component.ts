import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adm } from 'src/app/model/adm';
import { AdmService } from 'src/app/service/adm.service';

@Component({
  selector: 'app-editadm',
  templateUrl: './editadm.component.html',
  styleUrls: ['./editadm.component.css']
})
export class EditadmComponent implements OnInit {
  editAdm : Adm = null;

  constructor(private sAdm: AdmService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAdm.details(id).subscribe(
      data => {
        this.editAdm = data;
      }, err => {
        alert("No se pudo editar.");
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAdm.update(id, this.editAdm).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo editar.");
      }
    )
  }

}
