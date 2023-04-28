import { TreeDiagramNode } from './node.class';

export class TreeDiagramNodeMaker extends TreeDiagramNode {
  private isMakerState = true;

  public override get isMaker() {
    return this.isMakerState;
  }

  public override drop(event) {
    event.preventDefault();

    const guid = this.getThisNodeList().draggingNodeGuid;

    this.getThisNodeList().rootNode(guid);
    this.displayName = 'New node';

    return false;
  }

  public override dragenter(event) {
    event.dataTransfer.dropEffect = 'move';

    const guid = this.getThisNodeList().draggingNodeGuid;
    const node = this.getThisNodeList().getNode(guid);

    if (node.parentId) {
      this.displayName = 'Root';
    }
  }

  public override dragover(event) {
    event.preventDefault();

    const guid = this.getThisNodeList().draggingNodeGuid;
    const node = this.getThisNodeList().getNode(guid);

    if (!this.isDragging && node.parentId) {
      this.isDragover = true;
      event.dataTransfer.dropEffect = 'move';
    }

    return false;
  }

  public override dragleave(event) {
    this.displayName = 'New node';
    this.isDragover = false;
  }
}
