
// animate() 方法执行 CSS 属性集的自定义动画。

// 该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。

// 只有数字值可创建动画（比如 "margin:30px"）。字符串值无法创建动画（比如 "background-color:red"）。

// $(selector).animate(styles,speed,easing,callback)
$(function(){
	$('#container_1 a').mouseenter(function(){
// 	不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。对应mouseout
// 只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。对应mouseleave
		$(this).find('i').animate({top:"-14px",opacity:"0"},300,function(){
			// find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。
			$(this).css({top:"14px"});
			$(this).animate({top:"10px",opacity:"1"},200);
		});
	})
})
