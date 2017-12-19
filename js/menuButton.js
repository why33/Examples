var $=function(selector){
    return document.querySelector(selector);
}
$('#buttonActive').addEventListener('click',function(){
    this.classList.toggle("buttonChange");
    $('#menuActive').classList.toggle('menueTipAcitve');
})
$('#closelogin').onclick=function(){
    $('.loginPage').style.display='none';
}
$('#login').onclick=function(){
    $('.loginPage').style.display='block';
}
$('#clearAllLogin').onclick=function(){
    $(".loginMessage input[type=text]").value="";
    $(".loginMessage input[type=password]").value="";
    
}
// 注册
$('#registerPage').onclick=function(){
    $('.registerPage').style.display='block';
}
$('#clearR').onclick=function(){
    var valsr=document.querySelectorAll('.registerCont input');
    for(var j=0;j<valsr.length;j++){
        valsr[j].value='';
    }
}
$('.closeRegis').addEventListener('click',function(){
     $('.registerPage').style.display='none';
})