import {Component, EventEmitter, OnInit, ElementRef} from '@angular/core';
declare var google: any;
declare var jQuery: any;


@Component({
  selector: 'line-chart',    
  template: require('./chart.tpl.html')
})
export class lineChart implements OnInit{

    constructor() {        
        this.createChart();        
    }

    createChart(){
    }

    ngOnInit(): void {

            setTimeout(()=>{

            let $chatNotification = jQuery('.chart_div')[0];

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
            ['Mushrooms', 3],
            ['Onions', 1],
            ['Olives', 1],
            ['Zucchini', 1],
            ['Pepperoni', 2]
            ]);

            var options = {'title':'How Much Pizza I Ate Last Night',
                        'width':400,
                        'height':300};

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart($chatNotification);
            chart.draw(data, options);

            },3000);

    }

}