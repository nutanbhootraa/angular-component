import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  // data binding
  serverId = 10;
  serverStatus = 'offline';

  allowNewServer = false;

  serverCreationStatus = 'No server was created';
  serverName = 'test server';
  serverCreated = false;
  servers = ['testServer1', 'testServer2'];

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  constructor() {
    this.serverStatus = Math.random() >0.5 ?'online':'offline';
  }


  getServerStatus() {
    return this.serverStatus;
  }

  OnCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created : ' + this.serverName;
  }

  OnUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.getServerStatus()==='online'? 'green': 'red';
  }
}
