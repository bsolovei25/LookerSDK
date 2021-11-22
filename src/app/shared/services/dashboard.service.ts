import { Injectable } from '@angular/core';
import {LookerBrowserSDK} from "@looker/sdk";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  sdk = LookerBrowserSDK.init40();
  public dashBoardInfo$: Observable<any[]>;

  constructor() { }

  getDashBoardInfo(dashBoardName:string):Observable<any>{
    // @ts-ignore
    this.dashBoardInfo$ = this.sdk.ok(this.sdk.search_dashboards(
      {
        title: 'Shared Axis Chart'
      }))
    debugger
    return this.dashBoardInfo$;
  }


}
