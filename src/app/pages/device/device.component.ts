import { Component, OnInit } from '@angular/core';

interface Device {
  deviceName: string;
  communicationType: string;
  location: string;
  firmWare: string;
  status: string;
  telemetry: string;
  lastConnection: string;
  authStatus: string;
  selected: boolean;
}

@Component({
  selector: 'ngx-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor() { }

  devices:Device[] = [
    {deviceName:"Apple Watch", communicationType:"Apple Inc", location:"USA", firmWare:"Antivirus", status:"Active", telemetry:"", lastConnection:"12 May,2018", authStatus:"SUCCESS", selected: false},
    {deviceName:"Sweeden", communicationType:"IKEA Furnitures", location:"Sweeden", firmWare:"Antivirus", status:"Active", telemetry:"", lastConnection:"12 May,2018", authStatus:"SUCCESS", selected: false},
    {deviceName:"Finland", communicationType:"Nokia COmmunications", location:"Finland", firmWare:"Antivirus", status:"Active", telemetry:"", lastConnection:"12 May,2018", authStatus:"SUCCESS", selected: false}
  ];
  ngOnInit() {
  }

  selectAll(isSelected){
    this.devices.forEach(element => {
      element.selected = isSelected;
    });
  }
}
