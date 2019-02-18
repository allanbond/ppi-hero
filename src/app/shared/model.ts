export interface Resolution {
  hPixels: number;
  vPixels: number;
}

export interface ScreenInfo {
  diagonalSize: number;
  resolution: Resolution;
}

export interface PresetResolution {
  label: string;
  resolution: Resolution;
}

export interface PresetResolutions {
  _720p: PresetResolution;
  _1080p: PresetResolution;
  _qhd: PresetResolution;
  _4k: PresetResolution;
}

export type PresetResolutionsKeys = keyof PresetResolutions;
