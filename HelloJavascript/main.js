$(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point.x,event.point.y,40);
        c.fillColor = 'green';

        var text = new PointText(event.point.x,event.point.y);
        text.justification = 'ceenter';
        text.fillColor = 'black';
        text.fontSize = 10;
        text.content = 'hello world';
    }



    paper.view.draw();
});

