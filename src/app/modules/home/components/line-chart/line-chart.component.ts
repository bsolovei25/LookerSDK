import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {svgArrowDown} from "../../../../../assets/icons/svg-arrow-down";
import {svgVelvetCircle} from "../../../../../assets/icons/svg-velvet-circle";
import {svgInfo} from "../../../../../assets/icons/svg-info";
import {crmFilter} from "../../../../../assets/icons/svg-filter";
import {svgMoreActions} from "../../../../../assets/icons/svg-more-actions";
import {svgGreenCircle} from "../../../../../assets/icons/svg-green-circle";
import {svgOrangeCircle} from "../../../../../assets/icons/svg-orange-circle";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

  public loopTimes: Array<string> = ['Marketing', 'Design', 'Development'];
  public colorStamps: Array<string> = ['velvet-circle', 'green-circle', 'orange-circle'];

  public options: any = {
    chart: {
      type: 'area',
      backgroundColor: "var(--default-white-color)"
    },
    accessibility: {
      description:null
    },
    title: {
      text: null
    },

    subtitle: {
      text: null
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        // formatter: function () {
        //   return this.value; // clean, unformatted number for year
        // }
      },
      style: {
        color: 'red'
      },
      accessibility: {
        rangeDescription: 'Range: 16 to 24.'
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
      }
    },
    tooltip: {
      pointFormat: '{series.name} had <b>{point.y:,.0f}</b><br/>open jobs in {point.x} Jun'
    },
    plotOptions: {
      area: {
        pointStart: 15,
        marker: {
          enabled: true,
          symbol: 'circle',
          radius: 4,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Design',
      data: [

        49, 69, 51, 70, 60, 63, 51, 44, 63, 60,
        //20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,

      ],
      color:'#4AEBD7',
      zIndex: 3
    }, {
      name: 'Development',
      data: [

        89, 81, 91, 105, 80, 75, 87, 90, 77, 81,
        //30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,

      ],
      color:'#FEBA69',
      zIndex: 2
    },{
      name: 'Marketing',
      data: [
        143, 130, 189, 174, 124, 139, 156, 189, 161, 230,
        //47000, 45000, 43000, 41000, 39000, 37000, 35000, 34000, 33000, 32000,

      ],
      //TODO custom tooltips
      // marker: {
      //   symbol: 'hollow_circle',
      //   lineColor: null,
      //   lineWidth: 4
      // },
      color:'#AC6EFF',
      zIndex: 1
    }]
  }

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  ngOnInit(): void {
    this.drawChart();
  }

  private drawChart():void{
    //TODO create custom tooltips
    // Highcharts.SVGRenderer.prototype.symbols.hollow_circle = function (x:number, y:number, w:number, h:number) {
    //   w = 9;
    //   h = 8;
    //   return ['M', x, y, 'L', x + w, y + h, 'M', x + w, y, 'L', x, y + h, 'z'];
    // }
    Highcharts.chart('linearChart', this.options);
  }

  private registerIcons(): void {
    this.iconRegistry.addSvgIconLiteral('arrow-down', this.sanitizer.bypassSecurityTrustHtml(svgArrowDown));
    this.iconRegistry.addSvgIconLiteral('velvet-circle', this.sanitizer.bypassSecurityTrustHtml(svgVelvetCircle));
    this.iconRegistry.addSvgIconLiteral('green-circle', this.sanitizer.bypassSecurityTrustHtml(svgGreenCircle));
    this.iconRegistry.addSvgIconLiteral('orange-circle', this.sanitizer.bypassSecurityTrustHtml(svgOrangeCircle));
    this.iconRegistry.addSvgIconLiteral('info', this.sanitizer.bypassSecurityTrustHtml(svgInfo));
    this.iconRegistry.addSvgIconLiteral('filter', this.sanitizer.bypassSecurityTrustHtml(crmFilter));
    this.iconRegistry.addSvgIconLiteral('more-actions', this.sanitizer.bypassSecurityTrustHtml(svgMoreActions));
  }

}
