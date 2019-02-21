import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input
} from "@angular/core";
import { ScreenService } from "../screen.service";
import { ScreenInfo } from "../shared/model";

@Component({
  selector: "app-screen",
  templateUrl: "./screen.component.html",
  styleUrls: ["./screen.component.scss"]
})
export class ScreenComponent implements AfterViewInit, OnInit {
  @Input() screen: ScreenInfo;
  @ViewChild("screenLine") screenLine: ElementRef;
  @ViewChild("screenSvg") screenSvg: ElementRef;
  public screenWidth: string;
  public screenHeight: string;

  constructor(private _screenService: ScreenService) {}

  ngOnInit() {
    this.screenWidth = this.screen.dimensions.width + "px";
    this.screenHeight = this.screen.dimensions.height + "px";
  }

  ngAfterViewInit() {
    const bounds = this.screenSvg.nativeElement.getBoundingClientRect();

    const lineCoords = this._screenService.computeScreenWidthIndicatorCoordinates(
      bounds
    );

    this.screenLine.nativeElement.setAttribute("x1", lineCoords.x1);
    this.screenLine.nativeElement.setAttribute("y1", lineCoords.y1);
    this.screenLine.nativeElement.setAttribute("x2", lineCoords.x2);
    this.screenLine.nativeElement.setAttribute("y2", lineCoords.y2);
  }
}
