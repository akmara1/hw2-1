const block = document.body.querySelector(".block")

const wrapper = document.body.querySelector(".wrapper")

let positionX = 0;
let positionY = 0;

const move = () => {
    if(positionX<=440 && positionY==0){
        positionX+=10;
        block.style.left = `${positionX}px`
        setTimeout(move, 100)

    }else if(positionX>=440 && positionY<=440){
        positionY+=10
        block.style.top = `${positionY}px`
        setTimeout(move, 100)
    }else if(positionX>=0 && positionY>=440){
        positionX-=10
        block.style.left = `${positionX}px`
        setTimeout(move, 100)
    }
    else if(positionX<=0 && positionY>=0){
        positionY-=10
        block.style.top = `${positionY}px`
        setTimeout(move, 100)
    }
}


move()
