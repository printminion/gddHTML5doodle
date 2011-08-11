var nyanCat = function () {
    
}

nyanCat.prototype.fly = function () {
    //set the Zindex
    //nyanloop von 0-360
    for(i=360;i<0;i--) {
        console.log(i);
    }
}

var flyObj = new nyanCat();
