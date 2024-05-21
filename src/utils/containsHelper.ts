import Point2D from "../doNotTouch/point2D";
import Node from "./node";

export default function containsHelper(
  node: Node | null,
  p: Point2D,
  orientation: boolean
): boolean {
  if (node === null) {
    return false;
  } else {
    if (orientation === true) {
      if (p.x == node.point.x) {
        return true;
      } else if (p.x < node.point.x) {
        return containsHelper(node.leftOfNode, p, !orientation);
      } else {
        return containsHelper(node.rightOfNode, p, !orientation);
      }
    } else {
      if (p.y < node.point.y) {
        return true;
      } else if (p.y == node.point.y) {
        return containsHelper(node.leftOfNode, p, !orientation);
      } else {
        return containsHelper(node.rightOfNode, p, !orientation);
      }
    }
  }
}