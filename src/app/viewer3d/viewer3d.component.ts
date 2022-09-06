import { AfterViewInit,
         Component,
         ElementRef,
         Input,
         OnInit,
         ViewChild
       } from '@angular/core';
import { WebViewer } from '@sanderboer/three_ts_viewer';

@Component({
  selector: 'app-viewer3d',
  templateUrl: './viewer3d.component.html',
  styleUrls: ['./viewer3d.component.css']
})
export class Viewer3dComponent implements OnInit {
  @ViewChild("viewerCanvas")
  // private canvasRef: ElementRef;
  private webViewer: WebViewer;
  
  constructor() {
    this.webViewer = new WebViewer("viewerCanvas");
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.webViewer.init();

  }

}
