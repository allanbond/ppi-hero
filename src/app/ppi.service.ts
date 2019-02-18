import { Injectable } from "@angular/core";
import {
  PresetResolutionsKeys,
  Resolution,
  ScreenInfo,
  PresetResolutions,
  PresetResolution
} from "./shared/model";
import { computePpi } from "./shared/ppi-utils";

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
  ): number {
    const screen: ScreenInfo = {
      diagonalSize: diagonalSize,
      resolution: {
        hPixels: 0,
        vPixels: 0
      }
    };

    if (typeof resolution === "string") {
      screen.resolution = presetResolutions[resolution as string].resolution;
    } else {
      screen.resolution.hPixels = (resolution as Resolution).hPixels;
      screen.resolution.vPixels = (resolution as Resolution).vPixels;
    }

    return computePpi(screen);
  }

  getPresetResolutions(): PresetResolutions {
    return this._presetResolutions;
  }

  constructor() {}
}
