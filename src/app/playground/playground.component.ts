import { Component, OnInit } from '@angular/core';
import { fabric } from "fabric";
// const fabric = require("fabric").fabric;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  // styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  canvas: any;
  title: string = "Playground"
  constructor() { }

  ngOnInit(): void {

    var canvas = new fabric.Canvas('play')
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = '#00aeff';

    // canvas.on('path:created', function(e) {
    //   (<any>event).path.set();
    //   canvas.renderAll();
    //   // drawOnCanvas(canvas.toJSON());
    // })

    //Chnage color ================================================
    const color = <HTMLInputElement>document.querySelector('#color');
    color.oninput = e => {
      canvas.freeDrawingBrush.color = (<HTMLTextAreaElement>e.target).value;
    }

  }
}
