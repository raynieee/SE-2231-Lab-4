import Point2D from "../doNotTouch/point2D";
import RectHV from "../doNotTouch/rectHV";
import Node from "./node";

export default function insertHelper(
  node: Node | null,
  p: Point2D,
  orientation: boolean,
  rect: RectHV | null = null
): Node | null {
  if (node === null) {
    const newRect = rect === null ? new RectHV(0, 0, 1, 1) : rect;
    const newNode = new Node(p, newRect, null, null, orientation);
    return newNode;
  }

  if (orientation) {
    node.rect = new RectHV(
      rect?.xmin ?? 0,
      rect?.ymin ?? 0,
      node.point.x,
      rect?.ymax ?? 1
    );
  } else {
    node.rect = new RectHV(
      rect?.xmin ?? 0,
      node.point.y,
      rect?.xmax ?? 1,
      rect?.ymax ?? 1
    );
  }

  if (orientation) {
    if (p.x < node.point.x) {
      node.leftOfNode = insertHelper(
        node.leftOfNode,
        p,
        !orientation,
        new RectHV(node.rect.xmin, node.rect.ymin, node.point.x, node.rect.ymax)
      );
    } else {
      node.rightOfNode = insertHelper(
        node.rightOfNode,
        p,
        !orientation,
        new RectHV(node.point.x, node.rect.ymin, node.rect.xmax, node.rect.ymax)
      );
    }
  } else {
    if (p.y < node.point.y) {
      node.leftOfNode = insertHelper(
        node.leftOfNode,
        p,
        !orientation,
        new RectHV(node.rect.xmin, node.rect.ymin, node.rect.xmax, node.point.y)
      );
    } else {
      node.rightOfNode = insertHelper(
        node.rightOfNode,
        p,
        !orientation,
        new RectHV(node.rect.xmin, node.point.y, node.rect.xmax, node.rect.ymax)
      );
    }
  }

  return node;
}