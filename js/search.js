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
          if(document.activeElement.tagName!="LI" && document.activeElement.className!="sTClose"){
             myUl.style.display='none';
             $("#clear").style.visibility="hidden";
          }
      },100)   
}
$("#clear").onclick=function(){
    $('#inputD').value='';
    selectl();
}
$('#clear').addEventListener("blur",function(){
     setTimeout(function(){
        if(document.activeElement.className='inputSty' && document.activeElement.tagName!="LI"){
            myUl.style.display='none';
            $("#clear").style.visibility="hidden";
        }
     },100)
})
// tableSearch
var trs=document.querySelectorAll("#tableA tr:not(.headerTb)");
$('#inputT').addEventListener("focus",focusF)
$('#inputT').addEventListener('keyup',function(){
    var trv=this.value.toUpperCase();
    for(var k=0;k<trs.length;k++){
        var indT=trs[k].childNodes[1].innerHTML.toUpperCase().indexOf(trv);
        if(indT==(-1)){
            trs[k].style.display='none';
        }else{
            trs[k].style.display='table-row';
        }
    }
    $('.sTClose').style.display='block';
})
$("#inputT").addEventListener("blur",function(){
    setTimeout(function(){
        for(var ins=0;ins<trs.length;ins++){
            trs[ins].style.display='table-row';
        }
        if(document.activeElement.tagName=="BODY"){
            $("#tableA").style.visibility='hidden';
            $('.sTClose').style.display='none';
        }
    },100)
    
})

for(var j=0;j<trs.length;j++){
    trs[j].addEventListener("click",function(){
        $("#inputT").value=this.childNodes[1].innerHTML;
        $("#tableA").style.visibility='hidden';
    })
}
$('.sTClose').addEventListener("click",function(){
    $("#inputT").value='';
    focusF();
})
$(".sTClose").addEventListener("blur",function(){
    setTimeout(function(){
        for(var ins=0;ins<trs.length;ins++){
            trs[ins].style.display='table-row';
        }
        if(document.activeElement.className!="inputStyle" && document.activeElement.tagName!="TR"){
            $("#tableA").style.visibility='hidden';
            $('.sTClose').style.display='none';
        }
    },100)
    
})
function focusF(){   
    if($("#inputT").value){
        $('.sTClose').style.display='block';
    }
    $('#tableA').style.visibility="visible";
    for(var ins=0;ins<trs.length;ins++){
         trs[ins].style.display='table-row';
    }
}
//sort
//升序
$('#sortBU').addEventListener("click",function(){
    var switching=true;
     while(switching){
        var sortlis=document.querySelectorAll('#sortlis>li');
        for(var w=0;w<sortlis.length;w++){
            if(w<sortlis.length-1){
                
                if(sortlis[w].innerHTML.toUpperCase()>sortlis[w+1].innerHTML.toUpperCase()){
                    switching=true;
                    sortlis[w].parentNode.insertBefore(sortlis[w+1],sortlis[w])
                    break;
                }else{
                    switching=false;
                }
            }
            
        }
     }
})
// 降序
$('#sortBD').addEventListener('click',function(){
     var switchs=true;
     while(switchs){
        var sortlisD=document.querySelectorAll('#sortlis>li');
        for(var a=0;a<sortlisD.length-1;a++){
            if(sortlisD[a].innerHTML.toUpperCase()>sortlisD[a+1].innerHTML.toUpperCase()){
                switchs=false;
            }else{
                sortlisD[a].parentNode.insertBefore(sortlisD[a+1],sortlisD[a]);
                switchs=true;
                break;
               
            }
        }
     }
})
//tableSort
$('#sortTNum').addEventListener("click",function(){sortFunction(0);});
$('#sortTName').addEventListener("click",function(){sortFunction(1);});
$('#sortTAge').onclick=function(){sortFunction(2)};
$('#sortTClass').onclick=function(){sortFunction(3)};
function sortFunction(index){
    var switchNum=true;
    while(switchNum){
        var trs=document.querySelectorAll(".sortTable tr:not(.headerSt)");
        for(var i=0;i<trs.length-1;i++){
            if(trs[i].cells.item(index).innerHTML>trs[i+1].cells.item(index).innerHTML){
                trs[i].parentNode.insertBefore(trs[i+1],trs[i])
                switchNum=true;
                break;
            }else{
                switchNum=false;
            }
        }
    }
}