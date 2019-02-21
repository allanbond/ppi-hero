import { Injectable } from "@angular/core";
import { padSvgLine } from "./shared/svg-utils";

const screenWidthIndicatorPadding = 15;

@Injectable({
  providedIn: "root"
})
export class ScreenService {
  constructor() {}

  computeScreenWidthIndicatorCoordinates(domRect: DOMRect) {
    return padSvgLine(domRect, screenWidthIndicatorPadding);
  }
}
