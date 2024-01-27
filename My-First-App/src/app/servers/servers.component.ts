import { Component } from '@angular/core';

@Component({
  //selector: 'app-servers',//element style
  //selector: '[app-servers]',// attribute style
  selector: '.app-servers',// class style
  templateUrl: './servers.component.html',
  //template:`<app-server></app-server><app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent{
  allowedNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName = 'Testserver'
  servers = ['test1','test2']
  serverCreated= false;
  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 1000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName+' Server was created!';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
