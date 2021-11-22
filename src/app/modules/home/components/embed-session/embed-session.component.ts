import { Component, OnInit } from '@angular/core';
import {LookerBrowserSDK} from "@looker/sdk";
import {DashboardService} from "../../../../shared/services/dashboard.service";
import {ApiSettings, IApiSettings, ITransport, ProxySession} from "@looker/sdk-rtl";

@Component({
  selector: 'app-embed-session',
  templateUrl: './embed-session.component.html',
  styleUrls: ['./embed-session.component.scss']
})
export class EmbedSessionComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  };

}
