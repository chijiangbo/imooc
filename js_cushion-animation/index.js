window.onload = function(){
	// window.onload 是一个事件
	var div_1 = document.getElementById('container_1');
	div_1.onmouseover = function(){
		// div.onmouseover是一个事件
		startMove (0);
	};
	div_1.onmouseout = function(){
		// div.onmouseover是一个事件
		startMove (-200);
	}
}
var timer = null;
// 定义的是全局变量
function startMove(targets){
	clearInterval(timer);
	// 不清楚定时器的话，越往后计时器会叠加，以后相当于很多个定时器在一直执行，就不会出现匀速的效果
	var div_1 = document.getElementById('container_1');
	timer = setInterval(function(){
		// timer前不应该加var  不然你的上面的clearInterval就不会起作用，因为你每次都在定义变量
		var speed = (targets - div_1.offsetLeft)/10;
		 // 目标值减去当前值，这样就会形成运动快慢之差
		 speed = speed>0?Math.ceil(speed):Math.floor(speed);
		 // 注意js中的取整
		// 目标值减去当前值
		if(div_1.offsetLeft == targets){
			// 先判断一下什么时候停止
			// .offsetLeft 返回值是数字，只不过他的默认的单位为像素，和.style.left 不同
		clearInterval(timer);
	} else {
		div_1.style.left = div_1.offsetLeft + speed +'px';
		// .left 不像 .offsetLeft的返回值是数字，它要有px这个单位
	}
	},10);	
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