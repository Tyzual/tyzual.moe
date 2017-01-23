const delay = (function () {
	const timers = {}
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

const snow = function () {
	const snowDiv = "<div class='snow'>❅<div>"
	setInterval(function () {
		const width = $(document).width()
		const height = $(document).height()
		const startX = Math.random() * width
		const delta = width / 5
		let endX = startX + (Math.random() * 2 - 1) * delta
		endX = Math.min(endX, width)
		endX = Math.max(endX, 0)
		const opacity = 0.3 + Math.random()
		const size = 10 + Math.random() * 30
		const speed = 1000 + 8000 * Math.random()
		const rotateStart = Math.random() * 360
		const rotateEnd = Math.random() * 360
		let snowClone = $(snowDiv).clone()
		snowClone.appendTo(".snowbg").css({
			left: startX + "px",
			opacity: opacity,
			"font-size": size,
			transform: "rotate(" + rotateStart.toString() + "deg)"
		}).animate({
			top: height.toString() + "px",
			left: endX + "px",
			opacity: 0.1,
		}, speed, "linear", function () {
			$(this).remove()
		})
		$({
			deg: 0
		}).animate({
			deg: rotateEnd
		}, {
			duration: speed,
			step: function (now) {
				snowClone.css({
					transform: 'rotate(' + now + 'deg)'
				})
			}
		})
	}, 150)
}

const imgLoad = function (url, callback) {
	const img = new Image()
	img.src = url
	if (img.compconste) {
		callback()
	} else {
		img.onload = function () {
			callback()
			img.onload = null
		}
	}
}

function adjustPoisition($info) {
	const screenWidth = $(window).width(),
		screenHeight = $(window).height() //当前浏览器窗口的 宽高  
	const scrolltop = $(document).scrollTop() //获取当前窗口距离页面顶部高度  
	let objLeft = 0
	if (screenWidth / screenHeight >= 1.3) {
		objLeft = (screenWidth / 5 - $info.width() / 2)
	} else {
		objLeft = (screenWidth / 2 - $info.width() / 2)
	}
	const objTop = (screenHeight - $info.height()) / 2 + scrolltop

	$info.animate({
		left: objLeft + 'px',
		top: objTop + 'px',
		'display': 'block',
		'visibility': 'visible'
	}, 100)
}

function adjustInfo() {
	const $info = $(".info")
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

const mainFunc = function () {
	adjustInfo()
	snow()
	$(".bg").css({
		'visibility': 'visible'
	})
	$(".fg1").flipping_text({
		tickerCount: 7,
		tickerTime: 100
	})
	setTimeout(function () {
		$(".fg2").css({
			'visibility': 'visible'
		})
		$(".fg2").flipping_text({
			tickerCount: 5,
			tickerTime: 80
		})
	}, 7 * 100 * 6)
	setTimeout(function () {
		$(".fg3").css({
			'visibility': 'visible'
		})
		$(".fg3").flipping_text({
			tickerCount: 5,
			tickerTime: 30
		})
	}, 7 * 100 * 6 + 5 * 80 * 12)
}