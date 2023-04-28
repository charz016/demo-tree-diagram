import { Component, ViewEncapsulation } from '@angular/core';
import json from '../../../../../mock-data.json';


@Component({
  selector: 'app-config-tree-nodes',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './config-tree-nodes.component.html',
  styleUrls: ['./config-tree-nodes.component.scss']
})
export class ConfigTreeNodesComponent {


  public treeConfig = {
    nodeWidth: 150,
    nodeHeight: 100
  };

  public tree: any;


  public ngOnInit() {
    this.tree = {
      json,
      config: this.treeConfig
    };
  }

}
