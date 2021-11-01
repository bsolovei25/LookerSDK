import { Component, OnInit } from '@angular/core';
import {LookerBrowserSDK} from "@looker/sdk";

@Component({
  selector: 'app-embed-session',
  templateUrl: './embed-session.component.html',
  styleUrls: ['./embed-session.component.scss']
})
export class EmbedSessionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.getLookerConfig()
      .then(response => {
        console.log(response, 'Success')
      }).catch(error => {
      console.log(error, 'Error')
    });
  }

  async getLookerConfig() {
    debugger
    // create a Browser SDK object for API 3.1 and API 4.0
    const sdk = LookerBrowserSDK.init40();
    // retrieve your user account to verify correct credentials
    const me = await sdk.ok(sdk.me(
      "id, first_name, last_name, display_name, email, personal_space_id, home_space_id, group_ids, role_ids"))
    console.log({me})
    // make any other calls to the Looker SDK
    const dashboards = await sdk.ok(
      sdk.search_dashboards({title: 'My SDK dashboard'})
    )
    if (dashboards.length === 0) {
      console.log('Dashboard not found')
    }


    await sdk.authSession.logout()
    if (!sdk.authSession.isAuthenticated()) {
      console.log('Logout successful')
    }

  }
}
