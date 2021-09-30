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

    // Set canvas width =================================
    const canvasSize = () => {
      let newWidth = document.documentElement.clientWidth / 100 * 80;
      let newHeight = document.documentElement.clientHeight / 100 * 65;
      const play = document.querySelector('#play');
      play?.setAttribute('width', newWidth.toString());
      play?.setAttribute('height', newHeight.toString());
      console.log("newWidth" + newWidth);
    }
    canvasSize();
    // window.onresize = e => {
    //   canvasSize(); 
    // }
    
    // Fabric Js Options =================================
    var canvas = new fabric.Canvas('play');
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = '#00aeff';

    // canvas.on('path:created', function(e) {
    //   (<any>event).path.set();
    //   canvas.renderAll();
    //   // drawOnCanvas(canvas.toJSON());
    // })

    //Selection Tool ================================================
    const selection = <HTMLElement>document.querySelector('.selection');
    selection.onclick = e => {
      canvas.isDrawingMode = false;
    }

    //Pencil Tool ================================================
    const pencil = <HTMLElement>document.querySelector('.pencil');
    pencil.onclick = e => {
      canvas.isDrawingMode = true;
    }

    //Change color ================================================
    const color = <HTMLInputElement>document.querySelector('#color');
    color.oninput = e => {
      canvas.freeDrawingBrush.color = (<HTMLTextAreaElement>e.target).value;
      canvas.isDrawingMode = true;
    }

    //Clear Canvas ================================================
    const clear = <HTMLElement>document.querySelector('.clear');
    clear.onclick = e => {
      canvas.clear();
    }

    //Upload Image ================================================
    const upload = <HTMLInputElement>document.querySelector('#upload');
    upload.onchange = e => {
        canvas.isDrawingMode = false;
        var file = (<any>e.target).files[0];
        var reader = new FileReader();
        reader.onload = function (f) {

          var data = (<any>f.target).result;
          fabric.Image.fromURL(data, function (img) {
            var oImg = img.set({ 
              left: 250,
              top: 250,
              angle: 0
              }).scale(0.4);

            canvas.add(oImg).renderAll();
            var a = canvas.setActiveObject(oImg);
            var dataURL = canvas.toDataURL({ format: 'png', quality: 0.8 });
          });
        };
        reader.readAsDataURL(file);
    }

    // Undo ================================================
    // const undo = <HTMLElement>document.querySelector('.undo');
    // undo.onclick = e => {
    //   var lastItemIndex = (canvas.getObjects().length - 1);
    //   var item = canvas.item(lastItemIndex);

    //   if (item.get('type') === 'path') {
    //     canvas.remove(item);
    //     canvas.renderAll();
    //   }
    // }

  }
}
