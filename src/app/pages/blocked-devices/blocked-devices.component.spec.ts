import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedDevicesComponent } from './blocked-devices.component';

describe('BlockedDevicesComponent', () => {
  let component: BlockedDevicesComponent;
  let fixture: ComponentFixture<BlockedDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
