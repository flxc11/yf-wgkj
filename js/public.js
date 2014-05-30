//滚动新闻
function autoScroll(obj) {
   $(obj).find("ul:first").animate({
   marginTop: "-22px"
   }, 500, function() {
      $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
   });
}

$(function(){
	//tab 选项卡切换
	$(".cnvp-tab-nav>a").bind( 'click', function() {
		  var tabs =   $(this).parent().children("a");
		  var selectedclass = getClass(tabs);
		  var panels = $(this).parent().parent().children(".cnvp-tab-panle");
		  var index = $.inArray(this, tabs);
		  if (panels.eq(index)[0]) {
			   $(tabs).removeClass(selectedclass)
					.eq(index).addClass(selectedclass);
			   $(panels).addClass("cnvp-tabs-hide")
					.eq(index).removeClass("cnvp-tabs-hide");
			}
	});
		String.prototype.trim = function(){
				return this.replace(/(^\s*)|(\s*$)/g,"");
			}
		getClass = function(items){
		currCls = null;
		items.each(function(i, item){
		 cls = $(item).attr('class');
		 if(cls && !cls.trim()==''){
			 currCls = cls;
			 return cls;
		 }
		 });
		return currCls;
		};
	
	//搜索
	$("input[name='keyword']").bind("focus", function () {
        if($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).bind("blur", function () {
        if($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    })
	//选项卡滑动切换通用
	$(".hoverTag .chgBtn").hover(function(){
		$(this).parent().find(".chgBtn").removeClass("chgCutBtn");
		$(this).addClass("chgCutBtn");
		var cutNum=$(this).parent().find(".chgBtn").index(this);
		$(this).parents(".hoverTag").find(".chgCon").hide();
		$(this).parents(".hoverTag").find(".chgCon").eq(cutNum).show();
	});
	//选项卡点击切换通用
	$(".clickTag .chgBtn").click(function(){
		$(this).parent().find(".chgBtn").removeClass("chgCutBtn");
		$(this).addClass("chgCutBtn");
		var cutNum=$(this).parent().find(".chgBtn").index(this);
		$(this).parents(".clickTag").find(".chgCon").hide();
		$(this).parents(".clickTag").find(".chgCon").eq(cutNum).show();
	});
	//top
	$(".chgImgBox").css("width",$("body").width());
	$(".chgImg").css("left",($("body").width()-1920)/2);

	var myar = setInterval('autoScroll("#scrollDiv")', 3000);
	$("#scrollDiv").hover(
		function() {
			clearInterval(myar);
		}, function() {
			myar = setInterval('autoScroll("#scrollDiv")', 3000)
		}
	);

	var menu = false;
	var menuIndex = -1;
	$(".subLi").hover(
		function(){
			if (menu == false || menuIndex != $(this).index()){
				$(".subnavigation").html($(this).find(".hidden").html());
				$(".navigation_hoverA").hide();
				$(this).find(".navigation_hoverA").show();
				$(".subnavigation").show();
				menu = true;
			}
			menuIndex = $(this).index();
		}
	);

	$(".hidLi").hover(function(){
		$(".subnavigation").fadeOut(100);
		$(".navigation_hoverA").hide();
		menu = false;
	});
	$(".navigation").hover(
		function(){return false},
		function(){
			$(".subnavigation").fadeOut(100);
			$(".navigation_hoverA").hide();
			menu = false;
		}
	);

	//2013-04-09js
	$(".mcase2_list2 li").hover(function(){
	 $(this).find(".mcase2_ptxtBg,.mcase2_ptxt").slideDown(200);	
	},function(){
	 $(this).find(".mcase2_ptxtBg,.mcase2_ptxt").slideUp(200);	
	});

	//作品展示
	$(".mah_r li").click(function(){
		$(".mah_r li").removeClass("mah_cutImg");
		$(this).addClass("mah_cutImg");
		$(".mah_bigImg img").attr("src",$(this).find(".hidden img").attr("src"));
		$("html,body").animate({scrollTop:$(".mah_con").offset().top},1000);
	});

	//弹出框
	$(".mc2_boxList ul").css("width",$(".mc2_boxList li").size()*336);
	$(".mc2_boxList li").hover(function(){
		var showID=$(this).attr("showID");
		if (showID){
			if (!$("#" + showID).is(":animated")) {
				$("#" + showID).fadeIn(500);
			};
			
		}else{
			$(".mc2_alrBox").fadeOut(500);
		}
	});
	$(".mc2_alrBox").hover(function(){return false},function(){
		$(".mc2_alrBox").fadeOut(500);
	});

	// $(".mc2_btnl").hover(
	// 	function(){
	// 		$(this).attr("src","images/mbtn1a.jpg");
	// 	},function(){
	// 		$(this).attr("src","images/mbtn1.jpg");
	// 	}
	// );

	// var srNum=0;	
	// var reNum=$(".mc2_boxList li").size();
	// $(".mc2_btn2").click(function(){
	// 	srNum++
	// 	if(srNum>reNum-3){
	// 		srNum=0;	
	// 	}
	// 	$(".mc2_boxList ul").animate({"left":-srNum*327},500);
	// });
	// $(".mc2_btnl").click(function(){
	// 	srNum--
	// 	if(srNum<0){
	// 	srNum=reNum-3;	
	// 	}
	// 	$(".mc2_boxList ul").animate({"left":-srNum*327},500);
	// });

	//屏蔽页面错误
	$(window).error(function(){
	  return true;
	});
	$("img").error(function(){
	  $(this).hide();
	});

});

//显示蒙灰层
function ShowMark(){
     var xp_mark=document.getElementById("xp_mark");
     if(xp_mark!=null) {
         //设置DIV
         xp_mark.style.left=0+"px";
         xp_mark.style.top=0+"px";
         xp_mark.style.position="absolute";
         xp_mark.style.backgroundColor="#000";
         xp_mark.style.zIndex="190";
         if(document.all) {
            xp_mark.style.filter="alpha(opacity=50)";
            var Ie_ver=navigator["appVersion"].substr(22,1);
           // if(Ie_ver==6||Ie_ver==5){hideSelectBoxes();}
         }
         else{xp_mark.style.opacity="0.5";}
         xp_mark.style.width="100%";
       var heights=XP_getPageSize().h;
       if(heights<600) {
         heights=620;
       }
       xp_mark.style.height=heights+"px";
         xp_mark.style.height=="100%";
         xp_mark.style.display="block";
     }
     else{
     //页面添加div explainDiv,注意必须是紧跟body 内的第一个元素.否则IE6不正常.
     $("body").prepend("<div id='xp_mark' style='display:none;'></div>");
     ShowMark();//继续回调自己
     }              
}
//隐藏蒙灰层
function HideMark(){
    var xp_mark=document.getElementById("xp_mark");
    xp_mark.style.display="none";    
    var Ie_ver=navigator["appVersion"].substr(22,1);
   // if(Ie_ver==6||Ie_ver==5){showSelectBoxes();}
}
//获取页面的高度与宽度
function XP_getPageSize(){
    var pt = {w:0,h:0}; 
    if (window.innerHeight && window.scrollMaxY){  
      pt.w = document.body.scrollWidth;
      pt.h = window.innerHeight + window.scrollMaxY;
    }
    else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
      pt.w = document.body.scrollWidth;
      pt.h = document.body.scrollHeight;
    } 
    else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
      pt.w = document.body.offsetWidth;
      pt.h = document.body.offsetHeight;
    }
    return pt;
}
function showDiv(obj){//页面可以用obj == document.getElementById();
 $(obj).show().css({"z-index":"200","position":"absolute"});
 center(obj);
 $(window).scroll(function(){
  center(obj);
 });
 $(window).resize(function(){
  center(obj);
 }); 
}
function center(obj){//页面可以用obj == document.getElementById();
    var windowWidth = document.documentElement.clientWidth;   
   var windowHeight = document.documentElement.clientHeight;   
   
   var popupHeight =$(obj).height();   
   var popupWidth =$(obj).width();    
   
   $(obj).css({
    "top": (windowHeight-popupHeight-400)/2+$(document).scrollTop()+200,   
    "left": (windowWidth-popupWidth)/2   
   });  
}
 //让层居中隐藏
function closeDiv(obj){
    $(obj).hide();
    $(window).unbind();
}	