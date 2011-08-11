
var drawDymaxion = function () {
    this.context = 0;
    var line0 = new Array( 0,0,1,1,1,0,1,0,1,0 );
    this.matrix = {start: line0,next:line0};
    this.idPrefix = 'dynRect';
    console.log(this.matrix);
}
/**
 * draws one rect in a given ctx context
 */
drawDymaxion.prototype.drawRect = function (ctx) {
    
}

/**
 * hier wird der ctx context geholt
 */
drawDymaxion.prototype.makeCtx = function () {
    
}

drawDymaxion.prototype.makeCanvas = function (id) {
    var can = document.createElement('canvas');
    can.setAttribute('id', this.idPrefix+id);
    can.setAttribute('style', 'width:200px;height:200px;border:1px solid black');
    body.appendChild(can);
}

drawDymaxion.prototype.printMatrix = function () {
    //first print all the canvases into the document
        
    //now iterate again over the matrix and print out the result of it
    
}

var dynObj = new drawDymaxion;


