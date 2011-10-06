/* Overlay jQuery Plugin */
(function($){
	
	$.fn.overlay = function(){

		var element = this;
		
		this.css({
			/*"width": "500",*/
			"position":"relative"
		});

		var items = $("div",this);

		$("div",this).css({
			"opacity": "0",
			"position": "absolute",
			"top": "0"
		});

		$("div:first-child").css("opacity","1");
		$("div:first-child").css("z-index","300");

		$("nav",this).css("position","absolute");

		$("nav a",this).click(function(){
			var href = $(this).attr('href');
			$("div",element).animate({opacity: 0},300,"linear");
			$("div",element).css("z-index","0");
			$(href).animate({opacity: 1},600,"linear");
			$(href).css("z-index","300");
		});

		return this;
	}

})(jQuery);