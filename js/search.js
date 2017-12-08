var $=function(selector){
    return document.querySelector(selector);
}
var lis=document.querySelectorAll("#myUl>li:not(.header)");
// lis.forEach(function(item,index,li){
//     // item.contentEditable=true;
//     item.tabIndex=0;
//     item.addEventListener("click",function(){
//         $('#inputD').value=this.innerHTML;
//         myUl.style.display='none';  
//     })
//     item.addEventListener("focus",function(){
//         console.log(121212)
//         console.log(document.activeElement)
//     })
// })
/*IE不支持forEach*/
for(var ind=0;ind<lis.length;ind++){
    lis[ind].tabIndex=0;
    lis[ind].addEventListener('click',function(){
        $('#inputD').value=this.innerHTML;
        myUl.style.display='none';  
    })
}
function selectl(){
    var vals=$('#inputD').value.toUpperCase();
    for(var i=0;i<lis.length;i++){
        var str=lis[i].innerHTML;
        var index=str.toUpperCase().indexOf(vals)
        if(index==(-1)){
            lis[i].style.display='none';
        }else{
            lis[i].style.display='block';
        }
    } 
    
}
$('#inputD').addEventListener("blur",hideMenu);
function showMenu(){
    myUl.style.display='block'; 
    $("#clear").style.visibility="visible";
}
function hideMenu(){
      setTimeout(function(){
          console.log(document.activeElement)
          if(document.activeElement==$("body")){
             myUl.style.display='none';
             $("#clear").style.visibility="hidden";
          }
      },100)   
}
$("#clear").onclick=function(){
    $('#inputD').value='';
    selectl();
}

