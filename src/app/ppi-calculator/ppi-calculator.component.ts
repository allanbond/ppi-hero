import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as PpiUtils from "../shared/ppi-utils";
import { PpiService } from "../ppi.service";
import { MatButtonToggleChange } from "@angular/material";
import {
  PresetResolution,
  PresetResolutions,
  ScreenInfo
} from "../shared/model";

@Component({
  selector: "app-ppi-calculator",
  templateUrl: "./ppi-calculator.component.html",
  styleUrls: ["./ppi-calculator.component.scss"]
})
export class PpiCalculatorComponent implements OnInit {
  ppiForm = new FormGroup({
    diagonalSize: new FormControl(27),
    presetResolution: new FormControl(),
    horizontalResolution: new FormControl(),
    verticalResolution: new FormControl()
  });
  screen: ScreenInfo;
  presetResolutions: PresetResolutions;

  constructor(private _ppiService: PpiService) {}

  ngOnInit() {
    this.presetResolutions = this._ppiService.getPresetResolutions();

    this.ppiForm.valueChanges.subscribe(changes => {
      const diagonalSize = this.ppiForm.get("diagonalSize").value;
      const horizontalResolution = this.ppiForm.get("horizontalResolution")
        .value;
      const verticalResolution = this.ppiForm.get("verticalResolution").value;
      const presetResolution = this.ppiForm.get("presetResolution").value;

      if (diagonalSize !== null && presetResolution !== null) {
        if (
          (presetResolution === "other" &&
            horizontalResolution !== null &&
            verticalResolution !== null) ||
          typeof presetResolution === "string"
        ) {
          const resolution =
            presetResolution === "other"
              ? { hPixels: horizontalResolution, vPixels: verticalResolution }
              : presetResolution;

          this.screen = this._ppiService.computePpi(
            Number.parseFloat(diagonalSize),
            resolution
          );
        }
      }
    });
  }

  isotherResolution(): boolean {
    return !!this.ppiForm.get("presetResolution").value;
  }

  onPresetResolutionChange(change: MatButtonToggleChange) {
    this.ppiForm.get("presetResolution").setValue(change.value);
  }
}
