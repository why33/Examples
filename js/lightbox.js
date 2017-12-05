window.onload=function(){
    var $=function(selector){
        return document.querySelector(selector);   
    }
    var lis=document.querySelectorAll(".liSty")
    var newDivs=document.createElement('div');
    newDivs.id="rowAction";
    newDivs.className='row';
    for(var i=1;i<=4;i++){
        var newDiv=document.createElement("div");
        var newImg=document.createElement("img");
        // var newSpan=document.createElement("span");
        newImg.src='./img/'+i+".jpg";
        newImg.alt="身边的那片田野啊，手边的稻花香，高粱熟来红满天，九儿我送你去远方....";
        newImg.id='img'+i;
        newDiv.appendChild(newImg);
        newDiv.addEventListener("click",function(){
            $('.modal').style.display="block";
            var index=Number(this.childNodes[0].id.slice(3));
            $('.otherBut-l').dataset.num=index;
            $('.otherBut-r').dataset.num=index;
            console.log(index)
            $('.modalDiv').style.transform='rotateY('+90*(index-1)+'deg)';
            for(var k=1;k<=4;k++){
                if(k==Number(index)){
                    lis[Number(k)-1].style.backgroundColor='lightgreen';
                }else{
                    lis[Number(k)-1].style.backgroundColor='white';
                }
                
            }
           
        })
        newDivs.appendChild(newDiv);


    }
    $(".wrap").appendChild(newDivs);    
    $('.closeBut').onclick=function(){
        $('.modal').style.display="none";
    }
    
    $('.otherBut-l').onclick=function(){
        var preNum=Number($('.otherBut-l').dataset.num)-1;
        var styleValue=Number($('.modalDiv').style.transform.slice(8,-4));
        $('.modalDiv').style.transform='rotateY('+(90+styleValue)+'deg)';
        if(preNum<=0){
           preNum=4;
        }
        for(var z=0;z<4;z++){
                lis[z].style.backgroundColor='white';             
        }
        lis[preNum-1].style.backgroundColor="lightgreen";
        $('.otherBut-l').dataset.num=preNum;
        $('.otherBut-r').dataset.num=preNum;
       
    }
    $('.otherBut-r').onclick=function(){
        var nextNum=Number($('.otherBut-r').dataset.num)+1;
        var styleValue=Number($('.modalDiv').style.transform.slice(8,-4));
        $('.modalDiv').style.transform='rotateY('+(styleValue-90)+'deg)';
        if(nextNum>=5){
            nextNum=1;
        }
        for(var z=0;z<4;z++){
            lis[z].style.backgroundColor='white';             
        }
        lis[nextNum-1].style.backgroundColor="lightgreen";
        $('.otherBut-l').dataset.num=nextNum;
        $('.otherBut-r').dataset.num=nextNum;
    }
    var liArrs=Array.prototype.slice.call(lis);
    for(var i=0;i<liArrs.length;i++){
        (function(i){
            liArrs[i].addEventListener("click",function(){
                $('.modalDiv').style.transform="rotateY("+(-90)*i+"deg)";
                for(var z=0;z<4;z++){
                        lis[z].style.backgroundColor='white';             
                }
                this.style.backgroundColor="lightgreen";
                $('.otherBut-l').dataset.num=i+1;
                $('.otherBut-r').dataset.num=i+1;
                
            })
        })(i)
        
    }
    
   


}