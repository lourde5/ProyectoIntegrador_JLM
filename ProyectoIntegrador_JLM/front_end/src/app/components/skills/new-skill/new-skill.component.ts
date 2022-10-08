import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string;
  numero: number;;

  constructor(private sskill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.numero);
    this.sskill.save(skill).subscribe(
      data=>{
      this.router.navigate([""]);
      }, err => {
        alert("No se ha podido añadir la skill");
      }
    )
  }

}