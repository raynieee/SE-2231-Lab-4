import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";
import insertHelper from "./utils/insertHelper";
import containsHelper from "./utils/containsHelper"
import rangeHelper from "./utils/rangeHelper";
import sizeHelper from "./utils/sizeHelper";
import Node from "./utils/node";

class KDTree {
  root: Node | null;

  public constructor() {
    this.root = null;
  }

  public isEmpty(): boolean {
    return this.root === null;
  }

  public size(): number {
    return sizeHelper(this.root);
  }

  public insert(p: Point2D): void {
    this.root = insertHelper(this.root, p, true);
  }

  public contains(p: Point2D): boolean {
    return containsHelper(this.root, p, true);
  }

  public range(rect: RectHV): Point2D[] {
    const result: Point2D[] = [];
    rangeHelper(this.root, rect, result);
    return result;
  }
}

export default KDTree;

// const tree = new KDTree()
// const point1 = new Point2D(0.1, 0.2)
// const point2 = new Point2D(0.3, 0.4)
// tree.insert(point1)
// tree.insert(point2)
// console.log(tree.size())
// const rect = new RectHV(0, 0, 1, 1)
// console.log(tree.range(rect))