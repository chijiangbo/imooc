window.onload = function(){
	// window.onload 是一个事件
	var div_1 = document.getElementById('container_1');
	div_1.onmouseover = function(){
		// div.onmouseover是一个事件
		startMove (100);
	};
	div_1.onmouseout = function(){
		// div.onmouseover是一个事件
		startMove (30);
	}
}
var timer = null;
var alpha = 0;
var alpha = 30;
// 因为无法获取和改变透明度的值，所以可以把透明度的值赋值给一个变量
// 定义的是全局变量
function startMove(targets){

	
	var div_1 = document.getElementById('container_1');
	clearInterval(timer);
	// 不清楚定时器的话，越往后计时器会叠加，以后相当于很多个定时器在一直执行，就不会出现匀速的效果
	timer = setInterval(function(){
		// timer前不应该加var  不然你的上面的clearInterval就不会起作用，因为你每次都在定义变量
		var speed = 0;
		if(alpha>targets){
			speed = -10;
		}else {
			speed = 10;
		}
		if(alpha == targets){
			// 先判断一下什么时候停止
			// .offsetLeft 返回值是数字，只不过他的默认的单位为像素，和.style.left 不同
		clearInterval(timer);
	} else {
		alpha = alpha + speed;
		div_1.style.filter = 'alpha(opacity:'+alpha+')' ;
		//ie
		div_1.style.opacity = alpha/100;
		//ff chrome
		// .left 不像 .offsetLeft的返回值是数字，它要有px这个单位
	}
	},30);	
}


// 因为两个函数的功能很像，我们可以通过传参进行简化
// function startMove1(){
// 	clearInterval(timer);
// 	var div_1 = document.getElementById('container_1');
// 	timer = setInterval(function(){
// 		if(div_1.offsetLeft == -200){
// 		clearInterval(timer);
// 	} else {
// 		div_1.style.left = div_1.offsetLeft - 10 + 'px';
// 	}
// 	},10);	
// }