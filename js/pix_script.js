let spa = document.createElement("div");
spa.setAttribute('id', 'pixel')
temp = 'rgb(255, 0, 0)'
//box = document.getElementById('box')

function Pixels(){

    this.box = document.getElementById('box')
    this.pixel = document.createElement('div')
    this.width = '2px';
    this.height = '2px';
    this.color = 'black';
    this.thickness = '100%'
    this.position = Math.floor(Math.random()*100)+0;
    
    // init
    this.createPixel();
    }
 

Pixels.prototype.createPixel = function(){
    this.pixel.setAttribute('id','pixel');
    this.pixel.style.position = 'absolute';
    this.pixel.style.left = `${Math.floor(Math.random()*1000)+0}px`;
    this.pixel.style.top = `${Math.floor(Math.random()*500)+0}px`;
    this.pixel.style.height = this.height;
    this.pixel.style.width = this.width;
    //this.pixel.style.borderRadius = '50%';
    this.pixel.style.backgroundColor = this.color;
    this.pixel.style.transition = 'transform 0.5s ease, background-color';
    this.box.appendChild(this.pixel);    
    };

function changeClr(x){
    // change color loop
    setTimeout(function(){   
        if(temp){
            temp = `hsl(0, 0%, ${Math.floor(Math.random()*75)+25}%)`
            x.style.backgroundColor = temp;
        }
    // Again
    changeClr(x);
      // Every 10ms 
    }, Math.floor(Math.random()*5000)+0);    
    };   
