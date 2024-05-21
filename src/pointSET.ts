import p5 from "p5";
import Point2D from "./doNotTouch/point2D";
import RectHV from "./doNotTouch/rectHV";

class PointSET {
  points: Point2D[];

  public constructor() {
    // construct an empty set of points
    this.points = [];
  }

  public isEmpty(): boolean {
    // is the set empty?
    return this.points.length === 0;
  }

  public size(): number {
    // number of points in the set
    return this.points.length;
  }

  public insert(p: Point2D): void {
    // add the point to the set (if it is not already in the set)
    if (!this.contains(p)) {
      this.points.push(p);
    }
  }

  public contains(p: Point2D): boolean {
    // does the set contain point p?
    for (const point of this.points) {
      if (point.equals(p)) {
        return true;
      }
    }
    return false;
  }

  public draw(p: p5): void {
    // draw all points to p5
    for (const point of this.points) {
      point.draw(p);
    }
  }

  public range(rect: RectHV): Point2D[] {
    // all points that are inside the rectangle (or on the boundary)
    const pointsInRect: Point2D[] = [];
    for (const point of this.points) {
      if (rect.contains(point)) {
        pointsInRect.push(point);
      }
    }
    return pointsInRect;
  } 
}

export default PointSET;