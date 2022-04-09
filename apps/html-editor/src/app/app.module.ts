import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LeftPanelComponentModule } from './components/left-panel/left-panel.component';
import { CenterPanelComponentModule } from './components/center-panel/center-panel.component';
import { RightPanelComponentModule } from './components/right-panel/right-panel.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComponentsModule,
    LeftPanelComponentModule,
    CenterPanelComponentModule,
    RightPanelComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
