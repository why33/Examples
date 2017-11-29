window.onload=function(){
    var $=function(selector){
        return document.querySelector(selector)
    }
    var timeNow=new Date();
    var year=timeNow.getFullYear();
    var month=timeNow.getMonth()+1;
    var day=timeNow.getDate();
    var changePreIndex=-1;
    var changeNextIndex=1;
    headShow(year,month)
    caShow(year,month,day)
    
    //返回今天
    $('#returnNow').onclick=function(){
        timeNow=new Date();
        year=timeNow.getFullYear();
        month=timeNow.getMonth()+1;
        day=timeNow.getDate();

        headShow(year,month)
        caShow(year,month,day)
    }
    //上一个月
    $('#preBut').onclick=function(){
        month=month+changePreIndex;
        if(month<1){
            month=12;
            year-=1;
        }
        headShow(year,month);
        caShow(year,month,0);
        
    }

    //下一个月
    $('#nextBut').onclick=function(){
         month=month+changeNextIndex;
         if(month>12){
            month=1;
            year=year+1;
         }
          headShow(year,month);
          caShow(year,month,0);
          
    }
    //年份
    function headShow(year,month){
        if($('.mark')){
            $('#months').removeChild($('.mark'))
        }
        if($('.timeMenus')){
            $('.wrap').removeChild($('.timeMenus'))
        }
        var liNode=document.createElement('li');
        var h5Node=document.createElement('h5');
        var h6Node=document.createElement('h6');
        liNode.className='mark';
        var nowMonth=monthChange(month-1);
        h5Node.innerHTML=nowMonth;
        h6Node.innerHTML=year;
        liNode.appendChild(h5Node);
        liNode.appendChild(h6Node);
        var lilastNode=$('#months>li:last-child');
        liNode.addEventListener("click",function(){
            if(!$('.timeMenus')){
                selectMenu(year,month,h5Node,h6Node);
            }
            
        })
        $('#months').insertBefore(liNode,lilastNode)
        
    }
    //展示
    function caShow(year,month,day){
        if($('.days')){
            $('.wrap').removeChild($('.days'));
        }
        var dayNumbers=new Date();
        dayNumbers.setFullYear(year,month-1,1)
        var dayEmpty=dayNumbers.getDay();
        var ulNodes=document.createElement('ul');
        ulNodes.classList.add('days');
        var numberDays=parseInt(dayNumbers.getDate());
        var dayIndex=new Date(year,month,0);
        var daynum=dayIndex.getDate()
        var numAll=Number(dayEmpty)+Number(daynum);
        for(var i=1;i<=numAll;i++){
            var liNewNode=document.createElement('li');
            if(i<=Number(dayEmpty)){
                ulNodes.appendChild(liNewNode);
            }else{
                liNewNode.innerHTML=i-dayEmpty;
                if(day==(i-dayEmpty)){
                    liNewNode.classList.add('liActive');
                    liNewNode.style.color='white';
                }
                ulNodes.appendChild(liNewNode);
            }
           
            
        }
        $('.wrap').appendChild(ulNodes);
    }
    //月份选择
    function selectMenu(year,month,h5Node,h6Node){
        h6Node.className+="timeActiveH6";
        h5Node.classList.add('timeActiveH5');
        var newUl=document.createElement('ul');
        newUl.classList.add('timeMenus');
        var timeMark=new Date();
        var timeMarkYear=timeMark.getFullYear();
        var timeMarkMonth=timeMark.getMonth();
        for(var k=0;k<=11;k++){
            var newLi=document.createElement('li');
            newLi.id="id"+k;
            newLi.innerHTML=monthChange(k);
            if(year==timeMarkYear && k==timeMarkMonth){
                newLi.classList.add('markText');
                newLi.style.color='white';
            }
            newLi.addEventListener("click",function(){
                month=Number(this.id.slice(2))+1;
                headShow(year,month);
                caShow(year,month,0);
            })
            newUl.appendChild(newLi)
        }
        $('.wrap').appendChild(newUl)

    }
   
    //月份转换
    function monthChange(month){
        switch(month){
            case 0: 
                return "January";
                break;
            case 1: 
                return "February";
                break;
            case 2:
                return "March";
                break;
            case 3:
                return "April";
                break;
            case 4:
                return "May";
                break;
            case 5:
                return "June";
                break;
            case 6:
                return "July";
                break;
            case 7:
                return "August";
                break;
            case 8:
                return "September";
                break;
            case 9:
                return "October";
                break;
            case 10:
                return "November";
                break;
            case 11:
                return "December";
                break;
            default:
                return 'December';
        }
    }
}