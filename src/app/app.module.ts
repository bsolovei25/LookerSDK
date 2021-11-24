import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmbedSessionComponent } from './modules/home/components/embed-session/embed-session.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarChartComponent } from './modules/home/components/bar-chart/bar-chart.component';
import { KpiChartComponent } from './modules/home/components/kpi-chart/kpi-chart.component';
import { LineChartComponent } from './modules/home/components/line-chart/line-chart.component';
import { AnalyticsDashboardComponent } from "./modules/home/components/analytics-dashboard/analytics-dashboard.component";
import { IconDirective } from './shared/directives/icon-directives/icon.directive';
import { MatIconModule } from "@angular/material/icon";
import { KpiBoxComponent } from './modules/home/components/kpi-chart/kpi-box/kpi-box.component';
import { CampaignsOverviewComponent } from './modules/home/components/campaigns-overview/campaigns-overview.component';
import {HighchartsChartModule} from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent,
    EmbedSessionComponent,
    BarChartComponent,
    KpiChartComponent,
    LineChartComponent,
    AnalyticsDashboardComponent,
    IconDirective,
    KpiBoxComponent,
    CampaignsOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
