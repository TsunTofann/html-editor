import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'html-editor-center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [CenterPanelComponent],
  imports: [CommonModule],
  exports: [CenterPanelComponent],
})
export class CenterPanelComponentModule {}
