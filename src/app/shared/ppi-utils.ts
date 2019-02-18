import { ScreenInfo } from "./model";

export function computePpi(screen: ScreenInfo): number {
  return Math.round(
    Math.sqrt(
      Math.pow(screen.resolution.hPixels, 2) +
        Math.pow(screen.resolution.vPixels, 2)
    ) / screen.diagonalSize
  );
}
