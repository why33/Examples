var $=function(selector){
    return document.querySelector(selector);
}
var lis=$('#listUlm').querySelectorAll("li");
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
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener("click",function(){
        this.classList.toggle('checked');
    })
}
//IE不支持forEach
// lis.forEach(function(item,index){
//     lisitem.addEventListener("click",function(){
//         this.classList.toggle('checked');
//     })
// })
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
//计算器
$('#calculatorButS').addEventListener('click',function(){
    $('.calculatorS').style.display='block';
})
$('#exit').addEventListener("click",function(){
    $('.calculatorS').style.display='none';
    $('#wraing').style.display='none';
    $('#answer_show').innerHTML=0;
    $('#contShow').innerHTML='';
})
$('#calculatorbuttons').addEventListener('mousedown',activeStyleBut);
$('#calculatorbuttons').addEventListener('mouseup',activeStyleBut);
$('#calculatorbuttons').addEventListener('click',clickBut);
function activeStyleBut(e){
    var event=window.event||e;
    var target=event.target || event.srcElement;
    target.classList.toggle('activeButStatus')
}
function clickBut(e){
    var event=window.event||e;
    var target=event.target || event.srcElement;
    if(isNaN(Number(target.id))){
        var nameP=target.dataset.num;
        switch (nameP){
            case "clearAll":
                $('#answer_show').innerHTML=0;
                $('#contShow').innerHTML='';
                break;
            case "clear":
                var content=$('#contShow').innerHTML.slice(0,-1);
                $('#contShow').innerHTML=content;
                break;
            case "=":
                try{
                    var answer=eval($('#contShow').innerHTML);
                    console.log(answer);
                    if(parseInt(answer)==answer){
                        $('#answer_show').innerHTML=answer;
                    }else{
                        $('#answer_show').innerHTML=answer.toFixed(2);
                    }  
                    $('#wraing').style.display='none';
                    $('#wraing').classList.remove('wraingTip');
                }
                catch(err){
                    $('#wraing').style.display='block';
                    $('#wraing').classList.add('wraingTip')
                }
                
        } 
    }else{
        $('.calculatorContent').innerHTML+=target.dataset.num;
    }
    
}