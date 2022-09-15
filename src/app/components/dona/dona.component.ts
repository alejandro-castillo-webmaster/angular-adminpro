import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType,  Color  } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels2: string[] = ['Label1', 'Label2', 'Label2'];
  @Input('data') doughnutChartData2: any = [
    [350, 450, 100],
  ];

 constructor(){
  console.log(this.doughnutChartLabels2, this.doughnutChartData2);
 }
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]

  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }   


}
