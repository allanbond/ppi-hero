import { Injectable } from "@angular/core";
import {
  PresetResolutionsKeys,
  Resolution,
  ScreenInfo,
  PresetResolutions,
  PresetResolution
} from "./shared/model";

const presetResolutions: PresetResolutions = {
  _720p: {
    label: "720p",
    resolution: {
      hPixels: 1280,
      vPixels: 720
    }
  },
  _1080p: {
    label: "1080p",
    resolution: {
      hPixels: 1920,
      vPixels: 1080
    }
  },
  _qhd: {
    label: "QHD",
    resolution: {
      hPixels: 2560,
      vPixels: 1440
    }
  },
  _uwqhd: {
    label: "Ultrawide QHD",
    resolution: {
      hPixels: 3440,
      vPixels: 1440
    }
  },
  _4k: {
    label: "4k",
    resolution: {
      hPixels: 3840,
      vPixels: 2160
    }
  }
};

@Injectable({
  providedIn: "root"
})
export class PpiService {
  private _presetResolutions = presetResolutions;

  computePpi(
    diagonalSize: number,
    resolution: PresetResolutionsKeys | Resolution
  ): ScreenInfo {
    const screen: ScreenInfo = new ScreenInfo();
    screen.diagonalSize = diagonalSize;
    screen.resolution = {
      hPixels: 0,
      vPixels: 0
    };

    if (typeof resolution === "string") {
      screen.resolution = presetResolutions[resolution as string].resolution;
    } else {
      screen.resolution.hPixels = (resolution as Resolution).hPixels;
      screen.resolution.vPixels = (resolution as Resolution).vPixels;
    }

    return screen;
  }

  getPresetResolutions(): PresetResolutions {
    return this._presetResolutions;
  }

  constructor() {}
}
