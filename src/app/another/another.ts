import {Component} from '@angular/core';
import {HorizonService} from "../horizon/horizonservice";
import {lineChart, tableChart, TablesDynamic} from '../directives/index';
import * as _ from 'lodash';

@Component({
  selector: 'another',
  template: require('./another.html'),
  providers: [HorizonService],
  directives: [lineChart, tableChart, TablesDynamic],
})
export class AnotherPage {
   
  coins : any;
  change : any;

  constructor(private horizonService: HorizonService) {    

    horizonService.horizon("Event").order("id", "descending").limit(1).fetch().subscribe(
        result => {
          this.coins = result;
        }        
    );

    horizonService.horizon("Tick").watch({rawChanges: true}).subscribe(tick => {
        this.change = tick.new_val;
    });
      
  }

}