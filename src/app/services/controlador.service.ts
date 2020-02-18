import { Injectable } from '@angular/core';
import {Dev} from '../models/Dev';
@Injectable()
export class ControladorService {
  id=1;
  Devs:Dev[]=[];
  constructor() { }
  adicionarDev(dev:Dev){
    dev.id = this.id;
    this.Devs.push(dev);
    this.id = this.id+1;

  }
  getDev(id:Number){
    for(let dev of this.Devs){
      if(dev.id===id){
          return dev;
      }
    }
    return null;
  }
  removerDev(id:number){
    this.Devs = this.Devs.filter(dev=>dev.id!=id);
  }
  atualizarDev(id:number,devAtualizado: Dev){
    function atualiza(item,indice,lista){
      if(lista[indice].id==id){
        lista[indice] = devAtualizado;
      }
    }
    this.Devs.forEach(atualiza);
  }
}