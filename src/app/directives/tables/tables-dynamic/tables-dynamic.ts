import {Component, ViewEncapsulation, Input, OnChanges, OnInit} from '@angular/core';
import {Widget} from '../../../core/widget/widget';
import {TablesBackgrid} from './tables-backgrid/tables-backgrid';
import {DataTableDirectives} from 'angular2-datatable/datatable';
import {SearchPipe} from './pipes/search-pipe';
import * as _ from 'lodash';  
declare var google: any;
declare var jQuery: any;


@Component({
  selector: '[tables-dynamic]',
  template: require('./tables-dynamic.html'),
  encapsulation: ViewEncapsulation.None,
  directives: [Widget, TablesBackgrid, DataTableDirectives],
  styles: [require('./tables-dynamic.scss')],
  pipes: [SearchPipe],
  inputs:['source', 'change']
})
export class TablesDynamic implements OnInit, OnChanges{

  @Input() source : any;
  @Input() change : any;
  coins : any = [];    
  data: any[];

  createTable(values){        
    let i = 0;
        for(let name in values){            
            if(name !== "id"){
                i = i+1;
                values[name].i = i;
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


    ngOnChanges(changes) {
       if (changes.source && changes.source.currentValue!= null){        
        this.createTable(changes.source.currentValue[0]);
       }

       if(changes.change && changes.change.currentValue != null){
           this.update(changes.change.currentValue);
       }     
    }

  ngOnInit(): void {    
    let searchInput = jQuery('#table-search-input, #search-countries');
    searchInput
      .focus((e) => {
      jQuery(e.target).closest('.input-group').addClass('focus');
    })
      .focusout((e) => {
      jQuery(e.target).closest('.input-group').removeClass('focus');
    });
  }
}
