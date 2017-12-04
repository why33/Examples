

window.onload=function(){
    var $=function(selector){
        return document.querySelector(selector);
    }
     $('#butDialog0').onclick=function(){
         $('#dialogAction0').style.display='block'; 
     }
     $('#closeBut0').onclick=function(){
        $('#dialogAction0').style.display='none';
     }
     $('#butDialog1').onclick=function(){
        $('#dialogAction1').style.display='block'; 
     }
     $('#closeBut1').onclick=closeButton;
     $('#closeBut2').onclick=closeButton;
    //  window.onclick=function(e){
    //     var event=e || window.event;
    //     var ele=event.target || event.srcElement;
    //     if(ele==$('.dialogBut')){
    //        $('.dialogBut').style.display='none';
    //     }
    //  }
    $('#ImgDialog').onclick=function(){
        $('#dialogAction2').style.display='block';
    }
    $('#closeBut3').onclick=function(){
        $('#dialogAction2').style.display='none';
    }
    function closeButton(){
        $('#dialogAction1').style.display='none';
    }
}
