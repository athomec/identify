$(function () {//JS開頭
	//按鈕切換狀態
	$(".js-toggle-btn").click(function () {
		$(this).toggleClass('active');
	})

	//平面圖按鈕
	$(".js-tool-menu").find("button").click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
			// 移除其他按鈕的 active 類
			$(".js-tool-menu").find("button").not(this).removeClass("active");
		}
	});
})//JS尾端	
