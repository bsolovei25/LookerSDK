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

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

  public loopTimes: Array<string> = ['Marketing', 'Design', 'Development'];
  public colorStamps: Array<string> = ['velvet-circle', 'green-circle', 'orange-circle'];

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
