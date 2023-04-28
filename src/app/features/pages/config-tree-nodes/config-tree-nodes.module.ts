import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigTreeNodesRoutingModule } from './config-tree-nodes-routing.module';
import { ConfigTreeNodesComponent } from './config-tree-nodes.component';
import { TreeDiagramModule } from 'src/app/libs/ng-tree-diagram/ng-tree-diagram';


@NgModule({
  declarations: [
    ConfigTreeNodesComponent
  ],
  imports: [
    CommonModule,
    ConfigTreeNodesRoutingModule,
    TreeDiagramModule
  ]
})
export class ConfigTreeNodesModule { }
