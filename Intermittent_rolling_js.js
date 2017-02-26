function scroll(element,speed,lineH,delay)
{
	clearInterval(element.timer);
    element.timer=setInterval(function()
    {

    	// 向上移动
    	element.scrollTop++;

    	// 第一块移动完后，赶紧回到原位
        if(element.scrollTop>=element.scrollHeight/2)
        {
            element.scrollTop=0;//只在这里进行了初始化
        }


        // 间歇性滚动
        if(element.scrollTop%lineH==0)
        {
            clearInterval(element.timer);
            setTimeout(function(){
            	scroll(element,speed,lineH,delay)
            },delay)//delay时间后再执行scroll
        }

    },speed)
}

