window.onload = function()
{
        var timer = setInterval("FreshTime()",500);
        // 或者setInterval(FreshTime,500);
        // setInterval();所调用的函数必须是全局变量
}


function FreshTime()
{
        var endtime=new Date("2016/8/30, 12:20:12");//结束时间，注意格式

        var nowtime = new Date();//当前时间

        var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000 ); //.getTime()得到的是毫秒数
        
        d=   parseInt(lefttime/(24*60*60));
        h=  parseInt((lefttime/(60*60))%24);
        m=  parseInt(lefttime/60%60);
        s=  parseInt(lefttime%60);
       
        document.getElementById("LeftTime").innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
        if(lefttime<=0){
        document.getElementById("LeftTime").innerHTML="团购已结束";
        clearInterval(timer); //清除定时器
        }
}

// 获取年用getFullYear()
// 获取星期要用到数组
// 获取到的月份要加1 getMonth()