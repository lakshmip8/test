import { Component, OnInit } from '@angular/core';

interface Job {
  jobName: string;
  status: string;
  firmware: string;
  noDevices: number;
  succeeded: number;
  failed: number;
  startTime: Date;
  endTime: Date;
  selected: boolean;
}

@Component({
  selector: 'ngx-manage-certificates',
  templateUrl: './manage-certificates.component.html',
  styleUrls: ['./manage-certificates.component.scss']
})
export class ManageCertificatesComponent implements OnInit {

  constructor() { }

  jobStatuses: Job[] = [
    { jobName: "USA", status: "Applying..", firmware: "", noDevices: 2, succeeded: 10, failed: 1, startTime: new Date(), endTime: new Date(), selected: false },
    { jobName: "Sweden", status: "IKEA Furnitures", firmware: "", noDevices: 2, succeeded: 10, failed: 1, startTime: new Date(), endTime: new Date(), selected: false },
    { jobName: "Finland", status: "Nokia Communications", firmware: "", noDevices: 2, succeeded: 10, failed: 1, startTime: new Date(), endTime: new Date(), selected: false }
  ];

  certificate: Object = {
    open: 0,
    critical: 3,
    failed: 6,
    total: 24,
    authenticated: 20
  }
  ngOnInit() {
  }

  selectAll(isSelected) {
    this.jobStatuses.forEach(element => {
      element.selected = isSelected;
    });
  }
}
