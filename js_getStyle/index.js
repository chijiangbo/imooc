window.onload = function () {



	// width放在行内
	var divs = document.getElementsByClassName('first');
	for(var i=0; i<divs.length; i++){
		divs[i].timer = null;
		divs[i].onmouseover = function(){
			startMove1(this,20);
		}
		divs[i].onmouseout = function(){
			startMove1(this,200);
		}
	}
	// width放在css中
	var diva = document.getElementsByClassName('second');
	for(var i=0; i<diva.length; i++){
		diva[i].timer = null;
		diva[i].onmouseover = function(){
			startMove2(this,20);
		}
		diva[i].onmouseout = function(){
			startMove2(this,200);
		}
	}


}


function startMove1(obj,targets){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = 0;
		if(obj.offsetWidth<targets){
			//关键 .offsetWidth获取的是width加border-width加padding的值
			speed = 1;
		}else {
			speed = -1;
		}
		if(obj.offsetWidth == targets){
			clearInterval(obj.timer);
		}else {
			obj.style.width = parseInt(obj.style.width) + speed + 'px';
			// 设置的width就是内容宽度，为了避免.offsetWidth获取的不是.tyle.width，
			// 我们把width放在了行内，用.style.width作为初值
			// 学习了.parseInt()的用法
		}

	},30);
}


// 如果把width放在css中的话，我们要用getStyle()函数，它已经是封装好的

function startMove2(obj,targets){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = 0;
		if(obj.offsetWidth<targets){
			//关键 .offsetWidth获取的是width加border-width加padding的值
			speed = 1;
		}else {
			speed = -1;
		}
		if(obj.offsetWidth == targets){
			clearInterval(obj.timer);
		}else {
			obj.style.width = parseInt(getStyle(obj,'width')) + speed + 'px';
			// 设置的width就是内容宽度，为了避免.offsetWidth获取的不是.tyle.width，
			// 我们把width放在了行内，用.style.width作为初值
			// 学习了.parseInt()的用法
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