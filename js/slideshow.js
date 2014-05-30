$(document).ready(function(){
	
	// Create marquee dots
	$('.slideshow .slide').each(function(i){
		$('.top .dots').append('<span class="dot" goto="' + i + '"><a href="#" onclick="return false;">&bull;</a></span>');
	});
	$(".dots span:gt(4)").hide();
	$('.top .dots .dot').each(function(i){
		$(this).click(function(){
			var go = $(this).attr('goto');
			if(go != slideroller.index()) slideroller.goto(go);
		});
	});
	
	// Apply timed rotation slides for animation
	window.slideroller = $('.slideshow .slide').rotate(5000, function(item, self) {
		item.fadeOut(function(){
			$('.overlay', item).hide();
			$('.overlay', item).css('left', '40%');
			$('.link', item).hide();
			$('.link', item).css('left', '-100px');
		});
	}, function(item, self) {
		for(i = 0; i < $('.top .dots .dot').length; i++) {
			var col = (i != self.index()) ? "#fff" : "#36526c";
			$($('.top .dots .dot a')[i]).css('color', col);
		}
		item.fadeIn(function(){
			$('.overlay', item).animate({opacity: 'toggle', left: '50%'});
			setTimeout(function(){
				$('.link', item).animate({opacity: 'toggle', left: '0px'});
			}, 200);
		});
	});
});


