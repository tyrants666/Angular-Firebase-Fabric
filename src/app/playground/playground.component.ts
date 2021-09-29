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

    //Clear Canvas ================================================
    const clear = <HTMLInputElement>document.querySelector('.clear');
    clear.onclick = e => {
      canvas.clear();
    }

    //Upload Image ================================================
    // const upload = <HTMLInputElement>document.querySelector('#upload');
    // upload.onchange = e => {
    //   var reader = new FileReader();
    //   reader.onload = function (event) {
    //     console.log('fdsf');
    //     var imgObj = new Image();
    //     imgObj.src = event.target.result;
    //     imgObj.onload = function () {
    //       // start fabricJS stuff

    //       var image = new fabric.Image(imgObj);
    //       image.set({
    //         left: 250,
    //         top: 250,
    //         angle: 20,
    //         padding: 10,
    //         cornerSize: 10
    //       });
    //       canvas.add(image);
    //     }

    //   }
    //   reader.readAsDataURL(e.target.files[0]);
    // }

  }
}
