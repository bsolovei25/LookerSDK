import {Component, OnInit} from '@angular/core';
import {svgArrowDown} from "../../../../../assets/icons/svg-arrow-down";
import {svgVelvetCircle} from "../../../../../assets/icons/svg-velvet-circle";
import {svgGreenCircle} from "../../../../../assets/icons/svg-green-circle";
import {svgOrangeCircle} from "../../../../../assets/icons/svg-orange-circle";
import {svgInfo} from "../../../../../assets/icons/svg-info";
import {crmFilter} from "../../../../../assets/icons/svg-filter";
import {svgMoreActions} from "../../../../../assets/icons/svg-more-actions";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-kpi-chart',
  templateUrl: './kpi-chart.component.html',
  styleUrls: ['./kpi-chart.component.scss']
})
export class KpiChartComponent implements OnInit {

  public event: string = "Events created";
  public avgEvent: string = "Avg. event attendance";
  public eventNum: string = "35";
  public persentbox2: string = "1.78%";
  public persentbox1: string = "6.32%";
  public persentbox3: string = "2.01%";
  public persentbox4: string = "3.01%";
  public persentbox5: string = "16.01%";
  public persentbox6: string = "5.26%";
  public arrowUp: string = "up";
  public arrowDown: string = "down";


  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  ngOnInit(): void {
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
