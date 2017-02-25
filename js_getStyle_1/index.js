window.onload = function () {



	// width放在行内
	var divs = document.getElementById('first');

		divs.onmouseover = function(){
			startMove(divs,'width',20);
		}
		divs.onmouseout = function(){
			startMove(divs,'width',200);
		}


	// width放在css中
	var diva = document.getElementById('second');

		diva.onmouseover = function(){
			startMove(diva,'height',20);
		}
		diva.onmouseout = function(){
			startMove(diva,'height',200);
		}


}


// 如果把width放在css中的话，我们要用getStyle()函数，它已经是封装好的
var timer = null;

function startMove(obj,attr,targets){

	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = 0;

		var icur = parseInt(getStyle(obj,attr));

		speed = (targets - icur)/20;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		if(icur == targets){
			clearInterval(obj.timer);
		}else {
			obj.style[attr] = icur + speed + 'px';
			// 注意这块的设置变量属性
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