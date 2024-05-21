import Node from "./node";

export default function sizeHelper(node: Node | null): number {
  if (node === null) {
    return 0;
  } else {
    const leftSize = sizeHelper(node.leftOfNode);
    const rightSize = sizeHelper(node.rightOfNode);
    return leftSize + rightSize + 1 //+1 to include current node
  }
}