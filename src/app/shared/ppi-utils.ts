import { ScreenInfo } from "./model";
import Fraction from "fraction.js";

export const MILLIS_PER_INCH = 25.4;

export function computePpi(screen: ScreenInfo): number {
  return Math.round(
    Math.sqrt(
      Math.pow(screen.resolution.hPixels, 2) +
        Math.pow(screen.resolution.vPixels, 2)
    ) / screen.diagonalSize
  );
}

export function computeDotPitch(screen: ScreenInfo): number {
  return Number((MILLIS_PER_INCH / screen.ppi).toPrecision(3));
}

export function computeAspectRatio(screen: ScreenInfo): string {
  const aspectRatio = new Fraction(
    screen.resolution.hPixels + ":" + screen.resolution.vPixels
  );

  const simplifiedAspectRatio = aspectRatio.simplify();
  return simplifiedAspectRatio.n + ":" + simplifiedAspectRatio.d;
}
