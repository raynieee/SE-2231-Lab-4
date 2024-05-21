import Point2D from "../doNotTouch/point2D";
import RectHV from "../doNotTouch/rectHV";
import Node from "./node";

export default function rangeHelper(
  node: Node | null,
  rect: RectHV,
  result: Point2D[]
): void {
  if (node === null) {
    return;
  }

  if (rect.contains(node.point)) {
    result.push(node.point);
  }

  if (node.leftOfNode !== null && node.leftOfNode.rect.intersects(rect)) {
    rangeHelper(node.leftOfNode, rect, result);
  }

  if (node.rightOfNode !== null && node.rightOfNode.rect.intersects(rect)) {
    rangeHelper(node.rightOfNode, rect, result);
  }
}