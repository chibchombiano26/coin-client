import {Component} from '@angular/core';
import {HorizonService} from "../horizon/horizonservice";
import {lineChart} from '../directives/google/chart';

@Component({
  selector: 'another',
  template: require('./another.html'),
  providers: [HorizonService],
  directives: [lineChart],
})
export class AnotherPage {
   
  constructor(private horizonService: HorizonService) {    
       
  }

}