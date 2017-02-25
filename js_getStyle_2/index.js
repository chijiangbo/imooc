window.onload = function(){

	var div_1 = document.getElementById('container_1');
	div_1.timer = null;
	div_1.onmouseover = function(){
		startMove (div_1,'opacity',100);
	};

	div_1.onmouseout = function(){
		startMove (div_1,'opacity',30);
	}
}

var alpha = 30;
// var timer = null;

function startMove(obj,attr,targets){
	// alert(0.07*100);
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = 0;
		var icur = 0;
		if(attr == 'opacity'){
			icur = Math.round(parseFloat(getStyle(obj,attr))*100);
		}else {
			icur = parseInt(getStyle(obj,attr));
		}

		speed = (targets - icur)/8;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(icur == targets){
			clearInterval(obj.timer);
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