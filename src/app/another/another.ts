import {Component} from '@angular/core';
import {HorizonService} from "../horizon/horizonservice"

@Component({
  selector: 'another',
  template: require('./another.html'),
  providers: [HorizonService]
})
export class AnotherPage {
   
  constructor(private horizonService: HorizonService) {    
       
  }

}