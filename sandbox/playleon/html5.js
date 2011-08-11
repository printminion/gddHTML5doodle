window.addEventListener("DOMContentLoaded", fun, true);
   
function fun() {
   
    var world = document.getElementById('rectangle');
    world.setAttribute('height','200px'); 
    var img = new Image();
    
   img.onload = function () {   
        // Filled triangle
        ctx = world.getContext('2d');
       /* ctx.fillStyle = 'transparent';
        ctx.fillRect(0,0,world.width,world.height) //fill the background. color is
        ctx.arc(150, 200, 150, 0, Math.PI*2, true);*/
        
        
        
        ctx.drawImage(img,10,10, 200,200);
        console.log('im here', ctx, img);
    };
    img.src = 'aeinstein.jpg';
    

}

