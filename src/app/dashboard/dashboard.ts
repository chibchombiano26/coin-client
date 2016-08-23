import {Component} from '@angular/core';
import {Widget} from '../core/widget/widget';
import {HorizonService} from "../horizon/horizonservice"

@Component({
  selector: 'dashboard',
  template: require('./dashboard.html'),
  directives: [Widget],
  providers: [HorizonService]
})

export class Dashboard {

  constructor(private horizonService: HorizonService) {    
     
  }

}
