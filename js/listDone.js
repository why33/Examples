var $=function(selector){
    return document.querySelector(selector);
}
var lis=$('#listUlm').querySelectorAll("li");
console.log(lis)
for(var i=0;i<lis.length;i++){
    var newSpan=document.createElement("span");
    newSpan.innerHTML='\u2717';
    lis[i].appendChild(newSpan);
    newSpan.addEventListener('click',function(e){
        window.event?window.event.cancelBubble=true:e.stopPropagation();
        this.parentNode.parentNode.removeChild(this.parentNode)
        lis=$('#listUlm').querySelectorAll("li");      
    })
}
$('#buttonAdd').onclick=function(){
    if($('#inputValue').value){
        var newLi=document.createElement("li");
        var newSpan=document.createElement('span');
        newSpan.innerHTML='\u2717';
        newLi.innerHTML=$('#inputValue').value;
        newLi.appendChild(newSpan);
        newSpan.addEventListener("click",function(e){
            window.event?window.event.cancelBubble=true:e.stopPropagation();
            this.parentNode.parentNode.removeChild(this.parentNode);
        })
        newLi.addEventListener("click",function(){
            this.classList.toggle('checked');
        })
        $('#listUlm').appendChild(newLi);
        
        
    }else{
        $('#inputValue').classList.toggle("wraing")
    }
    
    
}
lis.forEach(function(item,index){
    item.addEventListener("click",function(){
        this.classList.toggle('checked');
    })
})
$('#clearS').addEventListener('click',function(){
    $('#inputValue').value="";
})

$('#inputValue').addEventListener('input',function(){
    if($('#inputValue').value){
        $('#clearS').style.display='block';
    }else{
         
    }
})
$('#inputValue').addEventListener('blur',function(){
    setTimeout(function(){
        if(document.activeElement!=$('#clearS')){
            $('#clearS').style.display='none'; 
        }
    },10) 
})

