import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'config-node',
    pathMatch: 'full'
  },
  {
    path: 'config-node',
    loadChildren: () => import('./features/pages/config-tree-nodes/config-tree-nodes.module').then(m => m.ConfigTreeNodesModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
