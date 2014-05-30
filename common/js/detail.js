//function clickIE() {if (document.all) { return false;}}
	//function clickNS(e) {if 
	//(document.layers||(document.getElementById&&!document.all)) {
	//if (e.which==2||e.which==3) { return false;}}}
	//if (document.layers) 
	//{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
	//else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
	
	//document.oncontextmenu=new Function("return false");
	//document.onselectstart=function(){return false; }

$(window).resize(function(){
	resizeProjectList();
	checkMenuWidth();
})

function checkMenuWidth(){
	/*
		when menu width not good, will skip project name
	*/
	if($(window).width() < $('#menu').attr('mwidth')){
		$('.skip').hide();
		
		if($('#menu').attr('mwidth2') == null){
			$('#menu').attr('mwidth2',($('div.r').width() + $('div.l').width() + 62 + 65))
		}
		
		if($('#menu').attr('mwidth2') > $(window).width()){
			
			$('.skip2').hide();	
		} else {
			$('.skip2').show();	
		}
	} else {
		$('.skip').show();
	}
}

function resizeProjectList(){
	var w = $(window).width();
	
	$('#project_list').width(w);
	
}
var detail_timer = null;
var menu_timer = null;
var show_pp = false;
var showing_pp = false;
var first_in = true;
bottom_range = 0.8;

$(function(){
	
	resizeProjectList();
	
	
	jQuery('#camera_wrap_detail').camera({
		fx:'simpleFade',
		height: 'auto',
		loader: 'none',
		navigationHover: false,
		mobileNavHover: false,
		playPause:false,
		pagination: false,
		thumbnails: false,
		hover: false,
		opacityOnGrid: false,
		transPeriod: 3000,
		slideOn : 'next',
		time: 4000,
		start_number : select_num,
		onStartTransition : function(){
			if(first_in){
				first_in = false;
				$('#camera_wrap_detail').css('opacity',0).animate({opacity:1},4000);
			}
			
			if($('.project_img_src').size() < 2){
				jQuery('#camera_wrap_detail').cameraPause();
				$('.camera_prev').hide();
				$('.camera_next').hide();
			}
		},
		onEndTransition : function(){
			
		}
	});
	
	
	$('#menu')
	.css({'top':-75})
	.show()
	.delay('800')
	.animate({'top':-75},'fast',function(){
		$(this).attr('mwidth',$('div.r').width() + $('div.l').width() + 62 + 65);
		checkMenuWidth();
	});
	
	$("#project_list").niceScroll({horizrailenabled:true}).hide();
	
	var width = getWidth();
	
	$('.list').width(width);
	
	$("#project_list").getNiceScroll().resize();
	
	
	/*
		main category button effect
		
		step:
		1.click 其中一個 all 縮細
	    2. 放大list
	    3.click 個格放大
	    4.放長個project list
	    5.count width( 個格放大 width + project list width)
		6.set scroll reset()
		
	*/
	var timer_box_a = null;
	$('.boxes > a').bind('mouseleave',function(){
		if(!$(this).hasClass('selected')) $(this).find('img').attr('src',$(this).find('img').attr('out_src'));
	})
	
	$('.boxes > a').bind('mouseenter',function(){
		if(!$(this).hasClass('selected')) $(this).find('img').attr('src',$(this).find('img').attr('over_src'));
	})
	
	$('.boxes > a').bind('mouseover',function(){
		clearTimeout(timer_box_a);
		var that = this;
		timer_box_a = setTimeout(function(){
			
	  		if($(that).hasClass('selected')){
	  			
	  			return !1;
	  			
	  		} else {
				
				jQuery('#camera_wrap_detail').cameraPause();
				
				$(that).find('img').attr('src',$(that).find('img').attr('out_src'));
				
	  			$('.boxes > a').removeClass('selected');
	  			
	  			//add class
	  			$(that).addClass('selected');
	  			
	  			//1.click 其中一個 all 縮細
	  			$('.boxes > a')
	  			.not(that)
	  			.find('> img')
	  			.animate({
	  				'width' : 132
	  				,'height' : 80
	  			},1200)
	  			
	  			$('.boxes')
	  			.animate({
	  				'padding-left' : 0
	  				,'padding-right' : 0
	  			});
				
				
	  			
	  			$('.boxes > a').not(that).animate({top:20},1200);
	  			
	  			$('.sub_list').not(that).stop().css('margin-left',0).animate({'width':1},1200);
				
				if($(that).hasClass('hidden') && $('.boxes').index($(that).parent()) == 0){
					v($(that).next().css('margin-left',145));
				}
	  			
	  			//2. 放大list
	  			$('.list').css('width','20000em');
	  			
				
				
	  			//3.click 個格放大
	  			$(that).find('> img')
	  			.animate({
	  				'width' : 195
	  				,'height' : 118
	  			},1200)
	  			
	  			$(that).parent('.boxes')
	  			.animate({
	  				'padding-left' : 11
	  				,'padding-right' : 11
	  			})
	  			
	  			$(that)
	  			.animate({
	  				top:0
	  			},1200,function(){
	  					
	  			});
	  			
				
				var pos = 147 * ($('.boxes').index($(this).parent()) * 1 - 1);
			
				if($(window).width() > ($('.boxes').size() * 147) + ($(that).next().attr('width') * 1 + 22)){
					
					$('#project_list').getNiceScroll().doScrollPos(0,0,0);
					
				} else {
					
					pos = pos - 78;
					
					$('#project_list').getNiceScroll().doScrollPos(pos,0,0);
					
				}
				
	  			//4.放長個project list
	  			var num = $(that).next().attr('width')
	  			$(that).next().delay(1000).stop().animate({'width':num},1200,function(){
	  				
					v('width2 : '+getWidth());
	  				//5.count width( 個格放大 width + project list width)
	  				$('.list').width(getWidth());
	  				
					//6.set scroll reset()
		  			$("#project_list").getNiceScroll().resize();		
					
					jQuery('#camera_wrap_detail').cameraResume();
					
	  			});	
	  		}	
		},1500 );
		
		return !1;
	})
	.bind('mouseleave',function(){
		clearTimeout(timer_box_a);	
	})

	$('.boxes > a').removeClass('selected');
	
	$('.boxes_selected').each(function(i,e){
		
		//add class
		$(this).addClass('selected');
		
		//1.click 其中一個 all 縮細
		$('.boxes > a > img').css({
			'width' : 132
			,'height' : 80
		})
		
		$('.boxes').css({
			'padding-left' : 0
			,'padding-right' : 0
		});
		
		//2. 放大list
		$('.list').css('width','20000em');
		
		//3.click 個格放大
		$(this).find('> img')
		.css({
			'width' : 195
			,'height' : 118
		})
		$(this)
		.parent('.boxes')
		.css({
			'padding-left' : 11
			,'padding-right' : 11
		})
		
		
		//4.放長個project list
		$(this).next().width($(this).next().find('.sub_boxes').width());
		
		
		var pos = 147 * ($('.boxes').index($(this).parent()) * 1 - 1);
		
		var _w = getWidth();
		
		
		
		if($(window).width() > getWidth()){
			_w = ($(window).width()  * 1 + pos * 1) - 200;
		}
		
		
		//5.count width( 個格放大 width + project list width)
		$('.list').width(_w);
		
		//6.set scroll reset()
		$("#project_list").getNiceScroll().resize();
		
		$('#project_list').getNiceScroll().doScrollPos(pos,0,0);
		
		
	})
	
	/*
		count project list width
		count width( 個格放大 width + project list width)
	*/
	function getWidth(){
		var m_margin = 14;
		var m_margin_big = 25;
		var w = 0;
		$('.list div.boxes').each(function(i,e){
			w += $(e).outerWidth() + m_margin;
		});
		
		
		return w;
	}
	
	
	/*
		create scroll pane for project area
	*/
	var settings = {
		showArrows: true,
		arrowScrollOnHover: true,
		otherUpArrows: 'a.project_jspArrowUp',
		otherDownArrows: 'a.project_jspArrowDown'
	};
	var pane01 = $('.scroll-pane01')
	pane01.jScrollPane(settings);
	var contentPane01 = pane01.data('jsp').getContentPane();
	
		
	/*
	  for show desceiption
	*/
	$('#pp .head').click(function(){
		if(!is_bottom_opening && !is_bottom_closing && is_bottom_show){
			if(!show_pp){
				show_pp = true;
				showing_pp = true;
		  		$('#pp').stop().animate({'height':273,'padding-top':20,'padding-bottom':0},1400,'easeInOutCirc',
		  		function(){
					showing_pp = false;
		  			$('.aw').hide();
					$('.project_jspArrowDown,.project_jspArrowUp').show();
					$('.awd').show();
		  		});
				
				$('#p_contentainer').stop().animate({'height':440},1400,'easeInOutCirc');
				
			} else {
				
				show_pp = false;
				showing_pp = true;
				$('.project_jspArrowDown,.project_jspArrowUp').hide();
				
				$('#p_contentainer').stop().animate({'height':180},1400,'easeInOutCirc');
		  		$('#pp').stop().animate({'height':20,'padding-top':8,'padding-bottom':6},1400,'easeInOutCirc',
		  		function(){
		  			$('.aw').show();
					$('.awd').hide();
					
					is_bottom_opening = false;
					is_bottom_show = true;
					
					showing_pp = false;
					
		  		});
				
			}	
		}
	})
	
	/*
		for bottom project list show effect
	*/
	$('#p_contentainer').delay('800').animate({'height':180},1600,'easeInOutCirc');
	$('#pp').delay('800').animate({'bottom':146},1600,'easeInOutCirc')
	$('#pl').delay('800')
	.show()
	.animate({'bottom':0},1600,'easeInOutCirc',function(){
		
		if(is_bottom_first_opening){
			is_bottom_first_opening = false;
			is_bottom_opening = false;
			is_bottom_closing = false;
			is_bottom_show = true;
		}
		
		/*
		  	for click any where check have show description or not
		*/
		$(window).click(function(){
			
			if(show_pp && !showing_pp){
				
				$('#pp .head').trigger('click')
			}
		})
		
	});
	
	if(is_touch_device()){
	
		document.addEventListener('touchstart', function(e) {
	
			var touch = e.touches[0];
			
			clearTimeout(detail_timer);
			
			if(!is_bottom_opening && !is_bottom_closing && !show_pp && !showing_pp){
				if(touch.pageY > $(window).height() * 0.7 && !is_bottom_show){
				    is_bottom_opening = true;
					
					$('#pl').stop()
					.animate({'bottom':0},1600,'easeInOutCirc');
					$('#pp').stop()
					.animate({'bottom':146},1600,'easeInOutCirc');
					
					$('#p_contentainer').stop().animate({'height':180},1600,'easeInOutCirc',function(){ is_bottom_show = true; is_bottom_opening = false; });
				} else if(touch.pageY < $(window).height() * 0.7 && is_bottom_show) {
					is_bottom_closing = true;
					
					$('#pl').stop()
					.animate({'bottom':-146},1600,'easeInOutCirc');
					$('#pp').stop()
					.animate({'bottom':10},1600,'easeInOutCirc');
					
					$('#p_contentainer').stop().animate({'height':44},1600,'easeInOutCirc',function(){ is_bottom_show = false; is_bottom_closing = false; });
				}
			}
			
			if( touch.pageY < $(window).height() * 0.2 && $('#menu').css('top') == '-75px'){
			   
				$('#menu')
				.animate({'top':0},1600);
				
			} else if($('#menu').css('top') == '0px') {
				$('#menu')
				.animate({'top':-75},1600);
				
			}
						   
		}, false);	
		
		
	}
	
	/*
		mouse move to left or right bottom project list will move
	*/
	var pl_timer = null;
	var pl_moving = false;
	$('html').bind('mousemove',function(e){
		var l = 80;
		var r = $(window).width() - 80;
		
		var l2 = 160;
		var r2 = $(window).width() - 160;
		
		if(e.pageY > $(window).height() - 155) {
			if( e.pageX < l ){
				
					
					clearInterval(pl_timer);
					pl_timer = setInterval(function(){
						var num = $('#project_list').scrollLeft();
						
						$('#project_list').scrollLeft(num - 2)
					},1)
				
				
				return !1;
			} 
			
			if( e.pageX > r ){
					
					clearInterval(pl_timer);
					pl_timer = setInterval(function(){
						var num = $('#project_list').scrollLeft();
						
						$('#project_list').scrollLeft(num + 2)
					},1)
				
				return !1;
			}	
			
			
			if( e.pageX < l2 ){
					
					clearInterval(pl_timer);
					pl_timer = setInterval(function(){
						var num = $('#project_list').scrollLeft();
						
						$('#project_list').scrollLeft(num - 1)
					},1)
				
				
				return !1;
			} 
			
			if( e.pageX > r2 ){
					
				clearInterval(pl_timer);
				pl_timer = setInterval(function(){
					var num = $('#project_list').scrollLeft();
					
					$('#project_list').scrollLeft(num + 1)
				},1)
				
				
				return !1;
			}	
		}
		
		pl_moving = false;
		
		clearInterval(pl_timer);
		
	})	

	
	/*
		for bg img not more than one, will skip prev and next button
	*/
	if($('.project_img_src').size() < 1){
		$('.camera_prev, .camera_next').hide();
	}
	
	$('.sub_boxes a:not(.ex_pix_thumb)').each(function(i,e){
		$(e).click(function(){
			
			$.post('select',{val:$(this).parent().find('a').index(this)},function(){
				location.href = $(e).attr('href');
			})
			
			return !1;
		})
	})
	
})