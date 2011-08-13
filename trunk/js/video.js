/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var videoDev = function () {
  
    this.videos =  $('.-video');
    this.videoContainer = $('.-vcontainer');
    this.originContent = new Array();
     debugAdd('init Videos');
//setting window URL global
   
}

videoDev.prototype.addVideos = function () {
    //this must be empty, also in the second call
     this.originContent = new Array();
    debugAdd('adding Videos');
     debugAdd(this.videos);
   

    var maxlength = this.videos.length;
    (function(videoObj) {
        videoObj.videoContainer.each(function(key,value) {
           
            if(key<videoObj.videos.length) {
                debugAdd('Adding:' + videoObj.videos[key].id);
                var fallObj = {
                    element:value.firstChild, 
                    pId:value.id
                };
                videoObj.originContent.push(fallObj);
                value.removeChild(value.firstChild);
                value.appendChild(videoObj.videos[key]);
                videoObj.videos[key].setAttribute('style','display:block');
                videoObj.videos[key].play();
                value.style.display = 'block';
            }
        });
        })(this);
}

videoDev.prototype.removeVideos = function () {
    this.originContent.forEach(function(value,key) {
        var injectIn = document.getElementById(value.pId);
        injectIn.removeChild(injectIn.firstChild);
        injectIn.appendChild(value.element);
    });
    this.videos.each(function(key,value){
        value.style.display = 'none';
    });
}


