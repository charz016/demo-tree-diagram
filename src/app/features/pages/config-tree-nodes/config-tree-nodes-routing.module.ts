import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigTreeNodesComponent } from './config-tree-nodes.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigTreeNodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigTreeNodesRoutingModule { }
