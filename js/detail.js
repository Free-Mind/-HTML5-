function slide(obj){
	/**
		用户点击酒店详情页面中：菜品，房间，评价时，发生的动画效果
		nav-line 元素滑动；字体颜色变化
	*/
	//设置滑动条宽度为container宽度的三分之一
	var screen_width = $(".container").width();
	var line_width = screen_width / 3;
	var value = parseInt(obj.getAttribute('value'));
	$(".nav-line")[0].style.transform = 'translate('+value*line_width+'px)';
	//字体颜色变化+不同div显示
	switch(value){
		case 0:
			$(".food").css({"color":"#ff4683"});
			$(".room").css({"color":"#111"});
			$(".evaluation").css({"color":"#111"});
			//菜品div显示，房间+评价div隐藏
			$(".food-detail").show();
			$(".room-detail").hide();
			$(".evaluation-detail").hide();
			break;
		case 1:
			$(".food").css({"color":"#111"});
			$(".room").css({"color":"#ff4683"});
			$(".evaluation").css({"color":"#111"});
			$(".food-detail").hide();
			$(".room-detail").show();
			$(".evaluation-detail").hide();
			break;
		case 2:
			$(".food").css({"color":"#111"});
			$(".room").css({"color":"#111"});
			$(".evaluation").css({"color":"#ff4683"});
			$(".food-detail").hide();
			$(".room-detail").hide();
			$(".evaluation-detail").show();
			break
	}

}

$(function hold_nav(){
	/**
	导航栏下拉到一定高度，自动固定
	*/
	var nav = $(".classfication-wrap");
	var win = $(window);
	var src = $(document);
	win.scroll(function(){
		if(src.scrollTop()>=271){
			nav.addClass('fixednav');
		}
		else{
			nav.removeClass('fixednav');
		}
	});
});