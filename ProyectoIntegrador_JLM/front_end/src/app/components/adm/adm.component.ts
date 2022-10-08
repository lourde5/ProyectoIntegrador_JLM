import { Component, OnInit } from '@angular/core';
import { Adm } from 'src/app/model/adm';
import { AdmService } from 'src/app/service/adm.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})

export class AdmComponent implements OnInit {
  adm: Adm[] = [];

  constructor(private sAdm: AdmService, private tokenService: TokenService) { }
 
  isLogged = false;

  ngOnInit(): void {
    this.cargarAdm();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
 
  cargarAdm():void{
    this.sAdm.lista().subscribe(data => {this.adm = data;})
  }

}