import {Component, EventEmitter, OnInit, ElementRef, Input, OnChanges} from '@angular/core';
import * as _ from 'lodash';  
declare var google: any;
declare var jQuery: any;


@Component({
  selector: 'table-chart',    
  template: require('./tableChart.tpl.html'),
  inputs:['source', 'change']
})
export class tableChart implements OnInit, OnChanges{

    @Input() source : any;
    @Input() change : any;
    coins : any = [];
        

    constructor() {        
                
    }

    createTable(values){        
        for(let name in values){
            if(name !== "id"){
                this.coins.push(values[name]);
            }
        }
    }

    update(data){
        if(this.coins){                        
           let index = _.findIndex(this.coins, {"currencyPair": data.currencyPair});
           this.coins[index] = data;      
        }
    }



    ngOnInit(): void {               
        
    }

    ngOnChanges(changes) {
       if (changes.source && changes.source.currentValue!= null){        
        this.createTable(changes.source.currentValue[0]);
       }

       if(changes.change && changes.change.currentValue != null){
           this.update(changes.change.currentValue);
       }     
    }

}