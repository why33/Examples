window.onload=function(){ 
    var index=1;
    var $=function(selector){
        return document.querySelectorAll(selector);
    };
    var slide=$('.slidePage');
    var dot=$('.dot');
    showSlide(index);
    var times=setInterval(timeFun,2000);
    function timeFun(){
        index+=1;
        showSlide(index);
    }
    function showSlide(index){
        if(index>slide.length){
            index=(index%(slide.length))?(index%3):slide.length;
        }else if(index<1){
            var number=parseInt((-index)/slide.length)+1;
            index+=slide.length*number;
        }
        for(var i=0;i<slide.length;i++){
            slide[i].style.display='none';
            dot[i].className='dot';
        }
        slide[index-1].style.display='block';
        dot[index-1].classList.add('active')   
    }
    $('.preBut')[0].onclick=function(){
         index+=(-1);
         showSlide(index)
    }
    $('.nextBut')[0].onclick=function(){
        index+=1;
        showSlide(index)
    }
    var dotArr=Array.prototype.slice.call(dot);
    dotArr.forEach(function(item,ind,arr){
        item.onclick=function(){
            index=ind+1
            showSlide(index)    
        }

    })
    $('.slideShow-container')[0].addEventListener('mouseover',function(){
        clearInterval(times)
    })
    $('.slideShow-container')[0].addEventListener('mouseout',function(){
        times=setInterval(timeFun,2000)
    })
    
}

