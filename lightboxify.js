
function lightbox (size, animation, anSpeed, bgColor, className)
{
    this.size = size
    this.animation = animation
    this.anSpeed = anSpeed
    this.bgColor = bgColor
    this.className = className
    this.lightboxify = function(){
        let lightboxLinks = document.querySelectorAll("." + this.className);
        console.log(lightboxLinks)
        lightboxLinks.forEach(box => register(box, this.size, this.animation, this.anSpeed, this.bgColor)) 
    }
}


let register = function(box, size, animation, anSpeed, bgColor) {
    let content = document.body
    console.log(animation)

    //Create and Register Styles
    var style = document.createElement('style');
    style.innerHTML = `
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.75);
        width: 100vw;
        height: 100vh;
    }
    
    .lightbox {   
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: white;
        -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        padding: 30px;
        border-radius: 5px;
    }
    
    .lightbox img {
        display: block;
        max-width: 90vw;
        max-height: 80vh;
    }

    .lightbox .lightbox-close {
        position: absolute;
        top: 0;
        right: 0;
        width: 48px;
        height: 48px;
        -ms-transform: translate(50%, -50%);
            transform: translate(50%, -50%);
        border: 0;
        outline: none;
        background: none;
        background-size: contain;
        background-image: url(../img/close-button.png);
    }
    `;
    document.head.appendChild(style);



    box.addEventListener('click',function(e){
        e.preventDefault()
      
        //Open the lightbox 
        //Styling

        //OVERLAY
        let lightOverlay = document.createElement('div')
        lightOverlay.classList.add('lightbox-overlay')
        content.appendChild(lightOverlay)

        //BORDER
        let lightHolder = document.createElement('div')
        lightHolder.classList.add('lightbox')
        lightHolder.setAttribute("style", "padding:" + size +"px;background-color:" + bgColor +";")
        content.appendChild(lightHolder)

        //IMG
        let lightboxImg = document.createElement('img')
        lightboxImg.src = box.href
        lightHolder.appendChild(lightboxImg)
        let closeImg = document.createElement('a')
        closeImg.classList.add('lightbox-close')
        
        //Place light box
        content.appendChild(lightOverlay)
        content.appendChild(lightHolder)
        lightHolder.appendChild(lightboxImg)
        lightHolder.appendChild(closeImg)

        //Animate the lightbox
       
        //Wiggle
        //Elastic
        //Bounce
        gsap.to('.lightbox', {
            duration: anSpeed,
            scale: 1.1,
            ease: animation
          })

        //Close the lightbox
        closeImg.addEventListener('click', function(){
                 content.removeChild(lightOverlay)
                 content.removeChild(lightHolder)
                 lightHolder.removeChild(lightboxImg)
                 lightbox = "down"

        })
        document.body.addEventListener('keydown', function(key){
                if(key.keyCode == 27){
                    content.removeChild(lightOverlay)
                    content.removeChild(lightHolder)
                    this.removeEventListener('keydown', arguments.callee);
            
                }
        })
        lightOverlay.addEventListener('click', function(){
                content.removeChild(lightOverlay)
                content.removeChild(lightHolder)
                lightHolder.removeChild(lightboxImg)
            
        })
    })
}
