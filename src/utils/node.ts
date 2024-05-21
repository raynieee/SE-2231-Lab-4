import Point2D from "../doNotTouch/point2D";
import RectHV from "../doNotTouch/rectHV";

export default class Node {
  point: Point2D;
  rect: RectHV;
  leftOfNode: Node | null;
  rightOfNode: Node | null;
  orientation: boolean; // true if vertical, false if horizontal

  constructor(
    point: Point2D,
    rect: RectHV,
    leftOfNode: null,
    rightOfNode: null,
    orientation: boolean
  ) {
    this.point = point,
    this.rect = rect,
    this.leftOfNode = leftOfNode,
    this.rightOfNode = rightOfNode,
    this.orientation = orientation
  }
}