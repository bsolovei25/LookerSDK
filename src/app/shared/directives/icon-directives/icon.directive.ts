import {Directive, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {svgArrowDown} from "../../../../assets/icons/svg-arrow-down";

@Directive({
  selector: '[appIcon]'
})
export class IconDirective implements OnInit{

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  ngOnInit(): void {
    //this.registerIcons();
  }

  private registerIcons():void{
    this.iconRegistry.addSvgIconLiteral('crm:arrow', this.sanitizer.bypassSecurityTrustHtml(svgArrowDown));
  }

}
