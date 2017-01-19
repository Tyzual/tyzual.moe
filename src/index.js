function adjustInfo() {
	var $info = $(".info");
	var screenWidth = $(window).width(),
		screenHeight = $(window).height(); //当前浏览器窗口的 宽高  
	var scrolltop = $(document).scrollTop(); //获取当前窗口距离页面顶部高度  
	var objLeft = (screenWidth / 5 - $info.width() / 2);
	var objTop = (screenHeight - $info.height()) / 2 + scrolltop;
	$info.css({
		left: objLeft + 'px',
		top: objTop + 'px',
		'display': 'block',
		'visibility': 'visible'
	});

	// var closeObjLeft = (screenWidth + obj.width())/2-closeObj.width()-2 ;  
	// var closeObjTop = (screenHeight - obj.height())/2 + scrolltop+12;  
	// closeObj.css({left: closeObjLeft + 'px', top: closeObjTop + 'px','display': 'block'});  

	//浏览器窗口大小改变时  
	$(window).resize(function () {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		scrolltop = $(document).scrollTop();
		objLeft = (screenWidth / 5 - $info.width() / 2);
		objTop = (screenHeight - $info.height()) / 2 + scrolltop;
		$info.css({
			left: objLeft + 'px',
			top: objTop + 'px',
			'display': 'block'
		});
	});

	//浏览器有滚动条时的操作、  
	$(window).scroll(function () {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		scrolltop = $(document).scrollTop();
		objLeft = (screenWidth / 5 - $info.width() / 2);
		objTop = (screenHeight - $info.height()) / 2 + scrolltop;
		$info.css({
			left: objLeft + 'px',
			top: objTop + 'px',
			'display': 'block'
		});
	});
}