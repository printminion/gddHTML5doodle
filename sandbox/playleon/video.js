/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var videoDev = function () {
    this.videos = new Array();
    //setting window URL global
    window.URL = window.URL || window.webkitURL;  // Take care of vendor prefixes.
    this.load('media/misha.m4v');
}


videoDev.prototype.load = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "arraybuffer";
   xhr.onreadystatechange = function (st) {
        
        if(this.readyState == 4 ) {
            var evt = document.createEvent("Events")
            //Aim: initialize it to be the event we want
            evt.initEvent('videoLoaded', true, true); //true for can bubble, true for cancelable
            window.document.dispatchEvent(evt);
             debugAdd('video is loaded');
        
     }
      if(this.readyState == 4 && this.status != 200) {
          debugAdd('video is broken');
          var evt = document.createEvent("Events")
            //Aim: initialize it to be the event we want
            evt.initEvent('videoCriticalError', true, true); //true for can bubble, true for cancelable
            window.document.dispatchEvent(evt);
      }
   }
    xhr.onload = function(e) {
        console.log(e, this.response,this.status);
        if (this.status == 200) {
            // Create a uInt8 container from the response:
            var uInt8Array = new Uint8Array(this.response); // Note: not xhr.responseText
            for (var i = 0, len = uInt8Array.length; i < len; ++i) {
                uInt8Array[i] = this.response[i];
            }
            var byte3 = uInt8Array[4]; // byte at offset 4

            // OR, create a blob until xhr.responseType = 'blob' is in:
            var bb = new WebKitBlobBuilder();
            
            bb.append(xhr.response);
            var blob = bb.getBlob();
            var img = document.createElement('video');
           img.appendChild(document.createElement("source")).src = window.URL.createObjectURL(blob);
            
            img.setAttribute('autoplay','true');
            img.setAttribute('controls','true');
            document.body.appendChild(img);
            console.log(img,byte3);
           
        }
    };
    xhr.send();
}

function uint8ToString(buf) {
    var i, length, out = '';
    for (i = 0, length = buf.length; i < length; i += 1) {
        out += String.fromCharCode(buf[i]);
    }
    return out;
}