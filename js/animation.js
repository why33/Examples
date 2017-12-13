// divMove
var id;
var topNum=0,leftNum=0;
var moveObject={
    topMove:0,
    leftMove:0,
    startMove:function(){
        this.topMove=topNum;
        this.leftMove=leftNum;
        id=setInterval(moveAnimation,10);
        function moveAnimation(){
            var divMove=document.querySelectorAll(".screenMove>div")[0];
            if(topNum!=250 && leftNum!=500){
                divMove.style.top=topNum+"px";
                divMove.style.left=this.leftNum+"px";
                topNum++;
                leftNum+=2;
            }else{
                clearInterval(id)           
            }   
        }
    },
    stopMove:function(){ 
        clearInterval(id)
    },
    againMove:function(){
        topNum=0;
        leftNum=0;
        this.startMove();
    }
}
function startMove(){
    moveObject.startMove();
}
function StopMove(){
    moveObject.stopMove();
}
function againMove(){
    moveObject.againMove()
}
// Progress
var idP;
var proNum=0;
var spanP=document.querySelector('.progressingback>span');
function startProgress(){
    idP=setInterval(progressMove,50)
}
function stopProgress(){
    clearInterval(idP)
}
function progressMove(){
    if(proNum<=100){
        progressNum.innerHTML=proNum+"%";
        spanP.style.width=proNum+"%";
        proNum++;
        var styles=document.styleSheets;
        if(styles[0].insertRule){
            styles[0].insertRule(".progressingback>span::after{display:block;}",styles[0].cssRules.length)
        }else if(styles[0].addRule){
            styles[0].addRule(".progressingback>span::after","display:block;",styles[0].cssRules.length);
        }
        console.log(styles)
    }else{
        clearInterval(idP);
    }
    

}

function againProgress(){
    proNum=0;
    idP=setInterval(progressMove,50)
    
}

