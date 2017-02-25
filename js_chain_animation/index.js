

function startMove(obj,attr,targets,fn){
	// alert(0.07*100);
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		// 取当前值
		var icur = 0;
		if(attr == 'opacity'){
			icur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}else {
			icur = parseInt(getStyle(obj,attr));
		}

		// 计算速度
		var speed = 0;
		speed = (targets - icur)/8;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);

		// 检测停止
		if(icur == targets){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
			// 执行下一个函数,如果存在fn函数，则执行
		}else {

				if(attr == 'opacity'){
					obj.style[attr] = 'alpha(opacity:'+(icur + speed)+')' ;		
					obj.style[attr] = (icur + speed )/100;

			}else {
				obj.style[attr] = icur + speed + 'px';
			}
		}

	},30);
}

// 这个函数还可以获取height border background font-size等
function getStyle(obj,attr){ 
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		// ie
	}else{
		return getComputedStyle(obj,false)[attr];
		// chrome
	}
}