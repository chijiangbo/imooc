window.onload = function(){

			var div_1 = document.getElementById('container_1');
			var lis = div_1.getElementsByTagName('a');
			for(var i=0; i<lis.length; i++)
			{
				lis[i].onmouseover = function()
				{
					var lis_i = this.getElementsByTagName('i')[0];
					//注意此处this的用法
					startMove(lis_i,{top:-6,opacity:0},function(){
						lis_i.style.top = 20 + 'px';
						startMove(lis_i,{top:10,opacity:100});
					});
				}
			}
}

// 获取样式函数
function getStyle(obj,attr)
{ 
	if(obj.currentStyle)
	{
		// ie
		return obj.currentStyle[attr];
	}else
	{
		// chrome
		return getComputedStyle(obj,false)[attr];
	}
}

// 利用json
// startMove(obj,{attr1:itarget1,attr2:itarget2},fn);

function startMove(obj,json,fn)
{
	clearInterval(obj.timer); //清除定时器，注意为了避免多物体运动的叠加
	// 开启定时器
	obj.timer = setInterval(function(){

		var flag = true; //假设  这个要放在计时器中，才能实现同时运动和链式运动
		// 遍历json属性
		for(var attr in json)
		{

			//1. 取当前值
			var icur = 0;
			if(attr == 'opacity') //如果是透明度属性的话，透明度获取到的是小数，但是用的时候都要整数，所以要判断一下是不是透明度属性
			{
				icur = Math.round(parseFloat(getStyle(obj,attr))*100); //计算机显示小数时可能精度显示会有问题，所以要Math.round()
			}else 
			{
				icur = parseInt(getStyle(obj,attr));
			}

			// 2.计算速度
			var speed = 0;
			speed = (json[attr] - icur)/8; //目标值减去当前值
			speed = speed>0?Math.ceil(speed):Math.floor(speed); //为了避免小数，要取整

			// 3.检测停止
			if(icur != json[attr]) //如果当前值不等于目标值
			{
				flag = false;
			}

			if(attr == 'opacity') //透明度属性的设置又不同于一般的，所以要判断一下
			{
			obj.style[attr] = 'alpha(opacity:'+(icur + speed)+')' ;	//ie
			obj.style[attr] = (icur + speed )/100; //chrome

			}else 
			{
					obj.style[attr] = icur + speed + 'px';
			}
			
		}
		if(flag)
		{
			clearInterval(obj.timer);
			if(fn)//如果还有链式函数的话，再继续执行
			{
				fn();
			}
		}

	},20);//调节运动时间快慢
}

