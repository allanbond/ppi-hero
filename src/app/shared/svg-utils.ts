export function padSvgLine(domRect: DOMRect, padding: number): any {
  const x1 = 0;
  const y1 = 0;
  const x2 = domRect.right - domRect.left;
  const y2 = domRect.bottom - domRect.top;
  const slope = (y2 - y1) / (x2 - x1);
  const yIntercept = y2 - slope * x2;

  const newX1 = x1 + padding;
  const newY1 = slope * newX1 + yIntercept;

  const newX2 = x2 - padding;
  const newY2 = slope * newX2 - yIntercept;
  //   const newY2 = y2 - padding;
  //   const newX2 = (newY2 - yIntercept) / slope;

  return { x1: newX1, y1: newY1, x2: newX2, y2: newY2 };
}
