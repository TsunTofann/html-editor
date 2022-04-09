import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponentModule } from './left-panel/left-panel.component';
import { RightPanelComponentModule } from './right-panel/right-panel.component';
import { CenterPanelComponentModule } from './center-panel/center-panel.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeftPanelComponentModule,
    RightPanelComponentModule,
    CenterPanelComponentModule,
  ],
})
export class ComponentsModule {}
