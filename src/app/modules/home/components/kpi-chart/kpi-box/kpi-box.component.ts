import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {svgGreenArrowUp} from "../../../../../../assets/icons/svg-green-arrow-up";
import {svgRedArrowDown} from "../../../../../../assets/icons/svg-red-arrow-down";

@Component({
  selector: 'app-kpi-box',
  templateUrl: './kpi-box.component.html',
  styleUrls: ['./kpi-box.component.scss']
})
export class KpiBoxComponent implements OnInit {

  @Input() event:string;
  @Input() eventNum:string;
  @Input() percent:string;
  @Input() arrowPosition:string;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  ngOnInit(): void {

  }

  private registerIcons():void{
    this.iconRegistry.addSvgIconLiteral('green-arrow-up', this.sanitizer.bypassSecurityTrustHtml(svgGreenArrowUp));
    this.iconRegistry.addSvgIconLiteral('red-arrow-down', this.sanitizer.bypassSecurityTrustHtml(svgRedArrowDown));
  }

  public isArrowGreen():boolean{
    return this.arrowPosition === 'up';
  }

}
