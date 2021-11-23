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
      description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    },
    title: {
      text: 'US and USSR nuclear stockpiles'
    },

    subtitle: {
      text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
        'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
        'armscontrol.org</a>'
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
        rangeDescription: 'Range: 1940 to 2017.'
      }
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      },
      labels: {
        // formatter: function () {
        //   return this.value / 1000 + 'k';
        // }
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'USA',
      data: [

        369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
        //20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,

      ],
      color:'#AC6EFF',
      zIndex: 3
    }, {
      name: 'USSR/Russia',
      data: [

        11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
        //30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,

      ],
      color:'#FEBA69',
      zIndex: 2
    },{
      name: 'TomatoTown',
      plotBackgroundColor: '#FF0000',
      data: [
        40062, 42049, 43952, 45804, 47431, 49197, 55000, 63000, 71000, 89000,
        //47000, 45000, 43000, 41000, 39000, 37000, 35000, 34000, 33000, 32000,

      ],
      color:'#4AEBD7',
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
