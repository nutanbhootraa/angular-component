import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  // data binding
  serverId = 10;
  serverStatus = 'offline';

  allowNewServer = false;

  serverCreationStatus = 'No server was created';
  serverName = 'test server';

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  OnCreateServer() {
    this.serverCreationStatus = 'Server created : ' + this.serverName;
  }

  OnUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
