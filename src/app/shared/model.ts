import { computeAspectRatio, computePpi, computeDotPitch } from "./ppi-utils";

export interface Resolution {
  hPixels: number;
  vPixels: number;
}

export class ScreenInfo {
  diagonalSize: number;
  resolution: Resolution;

  get ppi() {
    return computePpi(this);
  }

  get dotPitch() {
    return computeDotPitch(this);
  }

  get aspectRatio(): string {
    return computeAspectRatio(this);
  }

  get dimensions() {
    const aspectRatioParts = this.aspectRatio.split(":");
    const aspectRatioWidth = Number(aspectRatioParts[0]);
    const aspectRatioHeight = Number(aspectRatioParts[1]);
    const aspectMultiplier = Math.sqrt(
      Math.pow(this.diagonalSize, 2) /
        (Math.pow(aspectRatioWidth, 2) + Math.pow(aspectRatioHeight, 2))
    );
    return {
      height: aspectMultiplier * aspectRatioHeight,
      width: aspectMultiplier * aspectRatioWidth
    };
  }
}

export interface PresetResolution {
  label: string;
  resolution: Resolution;
}

export interface PresetResolutions {
  _720p: PresetResolution;
  _1080p: PresetResolution;
  _qhd: PresetResolution;
  _uwqhd: PresetResolution;
  _4k: PresetResolution;
}

export type PresetResolutionsKeys = keyof PresetResolutions;
