window.onload = function () {

	// width动画
	var lis = document.getElementsByTagName('li');
	for(var i=0; i<lis.length; i++){
		lis[i].timer = null;
		// 似乎是在给每个元素新加自定义属性
		lis[i].onmouseover = function(){
			startMove1(this,400);
			// 获取当前的对象 this
		}
		lis[i].onmouseout = function(){
			startMove1(this,200);
		}
	}


	// 透明度动画
	var divs = document.getElementsByTagName('div');
	for(var i=0; i<divs.length; i++){
		divs[i].timer = null;
		divs[i].alpha = 30;
		// 这是这一节课的关键
		divs[i].onmouseover = function(){
			startMove2(this,100);
			// 获取当前的对象
		}
		divs[i].onmouseout = function(){
			startMove2(this,30);
		}
	}


}


// width动画
// var timer = null;
function startMove1(obj,targets){
	// 函数是这么定义的
	// 传入一个对象
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var icur = parseInt(getStyle(obj,'width'));
		var speed = (targets - icur)/8;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);

		if(icur== targets){
			clearInterval(obj.timer);
		}else {
			obj.style.width = icur + speed +'px';
		}

	},30);

}


// 透明度动画
// var alpha = 30;
function startMove2(obj,targets){
	// 函数是这么定义的
	// 传入一个对象
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = 0;
		if(obj.alpha<targets){
			speed = 10;
		}else {
			speed = -10;
		}
		if(obj.alpha == targets){
			clearInterval(obj.timer);
		}else {
			obj.alpha = obj.alpha+speed;
			obj.style.filter = 'alpha(opacity:'+obj.alpha+')';
			obj.style.opacity = (obj.alpha)/100;
		}

	},30);
}

function getStyle(obj,attr){ 
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		// ie
	}else{
		return getComputedStyle(obj,false)[attr];
		// chrome
	}
}