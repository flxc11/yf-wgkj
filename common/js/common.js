
var imgOriW= 2048;
var imgOriH= 1370;

function v(str){
	if(window.console){
  		
	}
}

jQuery(document).ready(function($) {
	
	$(window).resize(function() {
		rePosImg()
	});
	
	if($('#bg').attr('width') != null){
		imgOriW= $('#bg').attr('width');
		imgOriH= $('#bg').attr('height');
	}
	
	rePosImg();
	
	if($('#b001').size() > 0)
		openevent_v4();
	
    $('#menu .l a.f').show();
	
	if($('#b001').size() < 1){
		start_common();
		if(jQuery('#camera_wrap_4').size() > 0){
			home_init();
			jQuery('#camera_wrap_4').cameraResume();
			
		}
	}
});





function rePosImg(){
	
	imgOriW_ = imgOriW;
	imgOriH_ = imgOriH;
	
	if($('#project_bg').size() > 0){
		imgOriW_ = $('#project_bg img').eq(0).attr('width');
		imgOriH_ = $('#project_bg img').eq(0).attr('height');
	}
	
	imgOriW_ = imgOriW_ ? imgOriW_ : imgOriW;
	imgOriH_ = imgOriH_ ? imgOriH_ : imgOriH;
	
	var h=$(window).height();
	var ratioH=h/imgOriH_;
	var w=imgOriW_*ratioH;
	var width = $(window).width();	

	if(w<width){
		w=width;
		ratioW=w/imgOriW_;
		h=imgOriH_*ratioW;
	}
	
	$('#bg img, #project_bg img').css({'height':h,'width':w});
	
	var _width = $('#bg img').width()
	
	var posX=( width - _width )/2;
	
  	$('#bg img, #project_bg img').css({'left':posX});
	$('#bg img, #project_bg img').css({'top':(h - $(window).height()) / -2});
	
}

function openevent(){
	$('.opening2').css('margin-left',-282);
	$('.opening2 span').each(function(i){
		setTimeout(function(){
			switch(i){
				case 0:
					var sortTable=[];
					var num=14;
					
					for(i=0; i<num; i++){
						sortTable[i]=i;
					}
					
					for(i=0; i<200; i++){
						m=Math.floor(Math.random()*num);
						n=Math.floor(Math.random()*num);
						if(m!=n){
							sortTable[m]^=sortTable[n];
							sortTable[n]^=sortTable[m];
							sortTable[m]^=sortTable[n]
						}
					}
					
					//show logo
					$('.sw002 span').each(function(i,e){
						setTimeout(function(){
							$(e)
							.css({
								'opacity' : 0
								,'visibility' : 'visible'
							})
							.animate({
								'opacity' : 1
							},'slow')
						},(sortTable[i] * 100))
					});
					break;
				case 1:

					
					var sortTable=[];
					var num=13;
					
					for(i=0; i<num; i++){
						sortTable[i]=i;
					}
					
					for(i=0; i<200; i++){
						m=Math.floor(Math.random()*num);
						n=Math.floor(Math.random()*num);
						if(m!=n){
							sortTable[m]^=sortTable[n];
							sortTable[n]^=sortTable[m];
							sortTable[m]^=sortTable[n]
						}
					}
					
					//show logo
					$('.sw001 span').each(function(i,e){
						setTimeout(function(){
							$(e)
							.css({
								'opacity' : 0
								,'visibility' : 'visible'
							})
							.animate({
								'opacity' : 1
							},'slow')
						},(sortTable[i] * 100))
					});

					break;
				case 2:
					var sortTable=[];
					var num=7;
					
					for(i=0; i<num; i++){
						sortTable[i]=i;
					}
					
					for(i=0; i<200; i++){
						m=Math.floor(Math.random()*num);
						n=Math.floor(Math.random()*num);
						if(m!=n){
							sortTable[m]^=sortTable[n];
							sortTable[n]^=sortTable[m];
							sortTable[m]^=sortTable[n]
						}
					}
					
					//show logo
					$('.sw003 span').each(function(i,e){
						setTimeout(function(){
							$(e)
							.css({
								'opacity' : 0
								,'visibility' : 'visible'
							})
							.animate({
								'opacity' : 1
							},'slow')
						},(sortTable[i] * 100))
					});
					
					
					setTimeout(function(){
						location.href = bul+'/home';
					},2000);
					break;
			}
		}
		,i*3000);
	})	
}

function openevent_v4(){
	$('#bg').css('z-index',9999);
	home_init();
	
	if(isIE()){
		$('#b001').delay(1000).fadeIn(4000,function(){
			
		});
		$('#b002').delay(2500).fadeIn(4000,function(){
		
		});
		$('#b003').delay(4500).fadeIn(4000,function(){
				
		});
		$('#b004').delay(6000).fadeIn(2500,function(){
			
			$('#b005').fadeIn(2000,function(){
					$('#bg').fadeOut(2000,function(){
						start_common();	
						
						jQuery('#camera_wrap_4').cameraResume();
						
						$('#bg').remove();
					});	
			});
		});		
	} else {
		$('#b001').delay(1000).fadeIn(4000,function(){
			
		});
		$('#b002').delay(2500).fadeIn(4000,function(){
		
		});
		$('#b003').delay(4500).fadeIn(4000,function(){
				
		});	
		
		$('#b004').delay(6000).fadeIn(2500,function(){
			
			$('#b001').fadeOut(2000);
			$('#b002').fadeOut(2000);
			$('#b003').fadeOut(2000,function(){
				
							
					$('#bg').fadeOut(2000,function(){
						start_common();	
						
						jQuery('#camera_wrap_4').cameraResume();
						
						$('#bg').remove();
					});	
				
			});
			
			
		});	
	}
	
}

var news_timer = null;
var is_top_show = false;
var is_top_closing = false;
var is_top_opening = true;
var is_top_first_opening = true;

var is_bottom_show = false;
var is_bottom_closing = false;
var is_bottom_opening = true;
var is_bottom_opened = false;
var is_bottom_first_opening = true;

var is_bottom_show = false;
var top_range = 0.3;
var bottom_range = 0.9;

function isIE(){
	return $.browser.msie && parseInt($.browser.version, 10) < 9;
}

function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
	$('#menu .r').css('top',30)
    return true;  
  } catch (e) {  
    return false;  
  }  
}

function start_common(){
	if(!is_touch_device()){
		if($.browser.msie && parseInt($.browser.version, 10) < 9){
			$('#menu .r').css('top',32);
		}
		
		$('html').bind('mousemove',function(e){
			
			var top = $(window).height() * top_range;
			top = 170;
			var bottom = $(window).height() * bottom_range;
			
			if( e.pageY < top ){
				if((!is_top_opening && !is_top_closing && !is_top_show) || is_top_first_opening){
					is_top_first_opening = false;
					is_top_closing = false;
					is_top_opening = true;
					
					$('#menu')
					//.stop()
					.animate({'top':0},1600,function(){
						is_top_show = true;	
						is_top_closing = false;
						is_top_opening = false;
					});	
				}
				
				if(is_top_closing && !is_top_opening){
					is_top_opening = true;
					is_top_closing = false;
					
					$('#menu')
					//.stop()
					.animate({'top':0},1600,function(){
						is_top_show = true;	
						is_top_closing = false;
						is_top_opening = false;
					});		
				}
			} else {
				if(is_top_show && !is_top_closing && !is_top_opening){
					is_top_opening = false;
					is_top_closing = true;
					is_top_show = false;
					
					$('#menu').animate({top:-75},1600,function(){
						is_top_show = false;	
						is_top_closing = false;
						is_top_opening = false;
					})		
				}
			}
			
				
			if( e.pageY > bottom){
				if($('#camera_wrap_4').size()>0)jQuery('#camera_wrap_4').cameraPause();
				
				clearTimeout(news_timer);
				
				if(!is_bottom_opening && !is_bottom_closing && !is_bottom_show){
					
					if($('.news_selected').size()){
						
						is_bottom_opening = false;
						is_bottom_closing = false;
						is_bottom_show = true;
					}
					
					if($('#pl').size() && !show_pp && !showing_pp){
						is_bottom_opening = true;
						is_bottom_closing = false;
						$('#p_contentainer').stop().animate({'height':180},1600,'easeInOutCirc');
						$('#pp').stop().animate({'bottom':146},1600,'easeInOutCirc');
						$('#pl').stop().animate({'bottom':0}, 1600,'easeInOutCirc',function(){
							is_bottom_opening 	= false;
							is_bottom_closing 	= false;
							is_bottom_show 		= true;
						});
					}
				}
				
			} else {
				
				clearTimeout(news_timer);
				
				if(!is_bottom_opening && !is_bottom_closing && is_bottom_show && !is_bottom_opened){
					
					
					if($('.news_selected').size()){
						is_bottom_opening = false;
						is_bottom_closing = true;
					
						$('.news_selected').stop().animate({'bottom':0}, 800,function(){
							if($('#camera_wrap_4').size()>0)jQuery('#camera_wrap_4').cameraResume();
							is_bottom_opening = false;
							is_bottom_closing = false;
							is_bottom_show = false;
						});
					}
					
					if($('#pl').size() && !show_pp && !showing_pp){
						
						is_bottom_opening = false;
						is_bottom_closing = true;
						$('#p_contentainer').stop().animate({'height':44},1600,'easeInOutCirc');
						$('#pp').stop().animate({'bottom':10},1600,'easeInOutCirc');
						$('#pl').stop().animate({'bottom':-146}, 1600,'easeInOutCirc',function(){
							is_bottom_opening = false;
							is_bottom_closing = false;
							is_bottom_show = false;
						});
					}
				}	
			}
			
		})
	}
	
	$('.news').each(function(i,e){
		$(e).attr('rel',167);
	})

	$('.news_selected')
	.live('mouseenter',function(){
		is_bottom_opening = true;
		$('.news_selected a.up').trigger('click');	
	})
	.live('mouseleave',function(){
		is_bottom_closing = true;
		$(this).find('a.down').trigger('click');	
	})

	$('.news a.up')
	.bind('click',function(){
		
		//if(is_bottom_opened) return !1;
		
		is_bottom_opening = true;
		is_bottom_opened = false;
		var num = $('.news_selected').attr('rel');
		
		if(!is_bottom_first_opening){
			if($('#camera_wrap_4').size()>0)jQuery('#camera_wrap_4').cameraPause();
		}
		
		if(isIE()){
			
			$('.news_selected').stop().show().animate({'height':num}, 1600,function(){
				is_bottom_opening = false;
				is_bottom_closing = false;
				is_bottom_opened = true;
				is_bottom_show = true;
				
				is_bottom_first_opening = false;
			});		
		} else {
			
			$('.news_selected').stop().animate({'height':num,'opacity':1}, 1600,function(){
				is_bottom_opening = false;
				is_bottom_closing = false;
				is_bottom_opened = true;
				is_bottom_show = true;
				
				is_bottom_first_opening = false;
			});	
		}
		
		$('.news_selected a.up').fadeOut(1600);
		
	})
	
	
	
	$('.news_selected a.down')
	.live('click',function(){
		
		//if(!is_bottom_opened) return !1;
		
		is_bottom_opening = false;
		is_bottom_closing = true;
		
		$('.news_selected a.up').fadeIn(1600);
		$('.news_selected').stop().animate({'height':40, 'bottom':0}, 1600, function(){
			
			is_bottom_opening = false;
			is_bottom_closing = false;
			is_bottom_opened = false;
			
		});
		
		
		if($('#camera_wrap_4').size()>0)jQuery('#camera_wrap_4').cameraResume();
	})
}