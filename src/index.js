var delay = (function () {
	var timers = {}
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId"
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId])
		}
		timers[uniqueId] = setTimeout(callback, ms)
	}
})()

let snow = function () {
	var snowDiv = "<div class='snow'>❅<div>"
	setInterval(function () {
		const width = $(document).width()
		const height = $(document).height()
		const startX = Math.random() * width
		const delta = width / 5
		const endX = startX + (Math.random() * 2 - 1) * delta
		const opacity = 0.3 + Math.random()
		const size = 10 + Math.random() * 30
		const speed = 1000 + 8000 * Math.random();
		$(snowDiv).clone().appendTo(".snowbg").css({
			left: startX + "px",
			opacity: opacity,
			"font-size": size,
		}).animate({
			top: height.toString() + "px",
			left: endX + "px",
			opacity: 0.1,
		}, speed, "linear", function () {
			$(this).remove()
		})
	}, 100)
}

var imgLoad = function (url, callback) {
	var img = new Image()
	img.src = url
	if (img.complete) {
		callback()
	} else {
		img.onload = function () {
			callback()
			img.onload = null
		}
	}
}

function adjustPoisition($info) {
	var screenWidth = $(window).width(),
		screenHeight = $(window).height() //当前浏览器窗口的 宽高  
	var scrolltop = $(document).scrollTop() //获取当前窗口距离页面顶部高度  
	if (screenWidth / screenHeight >= 1.3) {
		var objLeft = (screenWidth / 5 - $info.width() / 2)
	} else {
		var objLeft = (screenWidth / 2 - $info.width() / 2)
	}
	var objTop = (screenHeight - $info.height()) / 2 + scrolltop

	$info.animate({
		left: objLeft + 'px',
		top: objTop + 'px',
		'display': 'block',
		'visibility': 'visible'
	}, 100)
}

function adjustInfo() {
	var $info = $(".info")
	adjustPoisition($info)

	//浏览器窗口大小改变时  
	$(window).resize(function () {
		delay(function () {
			adjustPoisition($info)
		}, 500, "resizeTimer")
	})

	//浏览器有滚动条时的操作、  
	$(window).scroll(function () {
		adjustPoisition($info)
	})
}