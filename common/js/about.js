function clickIE() {if (document.all) { return false;}}
function clickNS(e) {if
    (document.layers||(document.getElementById&&!document.all)) {
    if (e.which==2||e.which==3) { return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

//	document.oncontextmenu=new Function("return false");
document.onselectstart=function(){return false; }

var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

/*
 check ie
 */
function isIE(){
    return $.browser.msie && parseInt($.browser.version, 10) < 9;
}

/*
 for news width resize can fit screen
 */
function fitNewsWidth(){

    var news_width = $(window).width() - 288;

    if(news_width > 1094) news_width = 1094;

    if(news_width < 992){
        $('#mask > ul > li div.news_area .detail p span').css({'float':'none','display':'block','margin':'0 auto 6px','width':'100%'});

        $('#mask > ul > li div.news_area .detail p img').not('.btn_play').css({'width':'100%'});
    }

    if(news_width < 736) news_width = 736;

    $('#scroll-pane01').width(news_width * 0.44);
    $('div.news_area .list .main > li').width(news_width * 0.44);
    $('#scroll-pane02').width(news_width * 0.48);

    $('div.news_area .detail').width(news_width * 0.48);
    $('#mask > ul > li div.news_area .detail p').width(news_width * 0.48 - 10);
    $('#scroll-pane02').css('margin-left',news_width * 0.08);

    $('.news_list_jspArrowUp').css('left',((news_width * 0.44) / 2) - 5);
    $('.news_list_jspArrowDown').css('left',((news_width * 0.44) / 2) - 5);
    $('.news_detail_jspArrowUp').css('left',(news_width * 0.52) + ((news_width * 0.48) / 2) - 5);
    $('.news_detail_jspArrowDown').css('left',(news_width * 0.52) + ((news_width * 0.48) / 2) - 5);
}

function isIEAction(){
    /*
     1. fade in bg
     2. show mask
     3. show menu list
     */
    $('#project_bg img').eq(1).fadeIn(2000,function(){

        //remove project img
        if($('#project_bg img').size() > 1){
            $('#project_bg img').eq(0).remove();
        }

        $('#mask').show();

        /*
         create menu list effect, and use class 'opened' mean show or not
         */
        $('h2.cufon a').bind('click',function(){

            //check have opened class or not, 代表已經控左個menu, only sildeup 返個 content
            if($(this).parent().hasClass('opened')){
                //remove all content and remove all opened class
                $('#mask div.m').hide().removeClass('opened');
                $('h2.cufon').removeClass('opened');
                return !1;
            }

            $('#mask div.m').hide().removeClass('opened');
            $('h2.cufon').removeClass('opened');
            $(this).parent().addClass('opened');

            that=$(this).parent().next();
            $(this).parent().next().stop()
                .addClass('opened')
                .css({'height':'auto', 'display':'block'})

            if($(this).attr('rel') == 'news'){
                /*
                 create scroll pane for news area
                 */
                var element = $('.scroll-pane01').jScrollPane({
                    showArrows: true,
                    arrowScrollOnHover: true,
                    otherUpArrows: 'a.news_list_jspArrowUp',
                    otherDownArrows: 'a.news_list_jspArrowDown'
                });
                var api = element.data('jsp');


                /*
                 create one content box, click meni list will load diff content to content box, and content bax have arrow.
                 */
                var settings = {
                    showArrows: true,
                    arrowScrollOnHover: true,
                    autoReinitialise: true,
                    otherUpArrows: 'a.news_detail_jspArrowUp',
                    otherDownArrows: 'a.news_detail_jspArrowDown'
                };
                var pane = $('.scroll-pane02')
                pane.jScrollPane(settings);
                var contentPane02 = pane.data('jsp').getContentPane();
            }

            if($(this).attr('rel') == 'awards'){

                /*
                 create scroll pane for awards area
                 */
                var settings = {
                    showArrows: true,
                    arrowScrollOnHover: true,
                    otherUpArrows: 'a.awards_list_jspArrowUp',
                    otherDownArrows: 'a.awards_list_jspArrowDown'
                };
                var pane03 = $('.scroll-pane03')
                pane03.jScrollPane(settings);
                var contentPane03 = pane03.data('jsp').getContentPane();
            }

            if($(this).attr('rel') == 'media'){
                /*
                 create scroll pane for media area
                 */
                var settings = {
                    showArrows: true,
                    arrowScrollOnHover: true,
                    otherUpArrows: 'a.media_list_jspArrowUp',
                    otherDownArrows: 'a.media_list_jspArrowDown'
                };
                var pane04 = $('.scroll-pane04')
                pane04.jScrollPane(settings);
                var contentPane04 = pane04.data('jsp').getContentPane();
            }

            return !1;
        })
    });
}

function notIEAction(){
    setTimeout(function(){
        /*
         fade in background
         */
        $('#project_bg img').eq(1)
            .css({ opacity: 0,display:'block'})
            .transition({ opacity: 1 }, 4000,function(){
                if($('#project_bg img').size() > 1){
                    $('#project_bg img').eq(0).remove();
                }
            });


        /*
         fade in black mask
         */
        $('#mask')
            .css({'left':320,opacity:0})
            .show()
            .animate({'left':230,opacity:1},2000);


        /*
         check touch screen
         */
        if(is_touch_device()){
            /*
             all menu 一齊出黎
             */
            $('h2').show();

            $('#menu').css({
                'top' : 0
                ,'position' : 'fixed'
                ,'width' : '100%'
                ,'z-index' : '1000'
            })
        } else {

            $('h2').css('opacity',0).show();
            $('h2').each(function(i,e){
                if($.support.transition){
                    /*
                     每一個menu慢慢滑出黎, opacity 0 -> 1
                     */
                    $(e)
                        .css({'x':40})
                        .transition({'x':0,'opacity':1,delay:(i*180) + 800},1800,'ease',function(){
                            $(this).attr('style','opacity:1');
                        });
                } else {
                    setTimeout(function(){
                        $(e)
                            .css({'left':40})
                            .animate({'left':0,'opacity':1},1800,'easeInOutQuint');
                    },(i*180) + 800)
                }

            })
        }
    },1500);

    $('h2.cufon a').bind('click',function(){

        //當click h2 就check 有冇opened class name
        if($(this).parent().hasClass('opened')){
            $('#mask div.m').slideUp(1200).removeClass('opened');
            $('h2.cufon').removeClass('opened');
            return !1;
        }

        //all opened content to hide
        $('#mask div.m').slideUp(1200).removeClass('opened');

        //remove tag opened class
        $('h2.cufon').removeClass('opened');

        //add tag opened class
        $(this).parent().addClass('opened');

        $(this).parent().next().stop().addClass('opened')
            .slideDown(1200,function(){$(this).css('height','auto')})



        /*
         for menu list click to change background.
         use fade in /out to change bg
         */
        /*
         Step flow :

         IF menu have 'opened' class
         TRUE:
         1. nothing
         FALSE:
         2. give bg path
         IF not path
         TRUE:
         3. nothing
         FALSE:
         4. add (append method) background path to '#project_bg' element (display:none and opacity:0)
         IF total bg count > 2
         TRUE:
         5. all bg stop() fade-in
         FALSE:
         6. nothing

         7.1. fade in just add bg
         7.2. after fade in then remove other bg

         8. run resize pos function "rePosImg()"

         */
        //get background img path
        var path = $(this).parents('li').find('div.m').attr('bg_img')

        //if have path, will add to project_bg
        if(path){

            //inset bg img to #project_bg
            $('#project_bg').append('<img src="'+path+'" style="display:none;"/>');

            //4. check total bg count > 2
            if($('#project_bg img').size() > 2){
                $('#project_bg img').stop(1);
            }

            //7.1. fade in just add bg
            //7.2. after fade in then remove other bg
            if($.support.transition){
                $('#project_bg img:last')
                    .css({ opacity: 0,display:'block'})
                    .transition({ opacity: 1 }, 1400,function(){
                        $('#project_bg img:not(:last)').remove();
                    });
            } else {
                $('#project_bg img:last')
                    .css({ opacity: 0,display:'block'})
                    .animate({ opacity: 1 }, 1400,function(){
                        $('#project_bg img:not(:last)').remove();
                    });
            }

            //8. run resize position
            rePosImg();
        }

        if($(this).attr('rel') == 'news'){
            /*
             create scroll pane for news area
             */
            var element = $('.scroll-pane01').jScrollPane({
                showArrows: true,
                arrowScrollOnHover: true,
                otherUpArrows: 'a.news_list_jspArrowUp',
                otherDownArrows: 'a.news_list_jspArrowDown'
            });
            var api = element.data('jsp');


            /*
             create one content box, click meni list will load diff content to content box, and content bax have arrow.
             */
            var settings = {
                showArrows: true,
                arrowScrollOnHover: true,
                autoReinitialise: true,
                otherUpArrows: 'a.news_detail_jspArrowUp',
                otherDownArrows: 'a.news_detail_jspArrowDown'
            };
            var pane = $('.scroll-pane02')
            pane.jScrollPane(settings);
            var contentPane02 = pane.data('jsp').getContentPane();
        }

        if($(this).attr('rel') == 'awards'){

            /*
             create scroll pane for awards area
             */
            var settings = {
                showArrows: true,
                arrowScrollOnHover: true,
                otherUpArrows: 'a.awards_list_jspArrowUp',
                otherDownArrows: 'a.awards_list_jspArrowDown'
            };
            var pane03 = $('.scroll-pane03')
            pane03.jScrollPane(settings);
            var contentPane03 = pane03.data('jsp').getContentPane();
        }


        if($(this).attr('rel') == 'media'){
            /*
             create scroll pane for media area
             */
            var settings = {
                showArrows: true,
                arrowScrollOnHover: true,
                otherUpArrows: 'a.media_list_jspArrowUp',
                otherDownArrows: 'a.media_list_jspArrowDown'
            };
            var pane04 = $('.scroll-pane04')
            pane04.jScrollPane(settings);
            var contentPane04 = pane04.data('jsp').getContentPane();
        }


        return !1;
    })
}


$(document).ready(function(){

    $('.btn_close').live('click',function(){
        $('#youtube_box').remove();
    })

    $('.c02').click(function(){

        $('#youtube_box').remove();

        var html = '<div id="youtube_box"><div class="inner"><iframe id="player" type="text/html" width="640" height="420" src="http://www.youtube.com/embed/'+$(this).attr('rel')+'?modestbranding=1&autoplay=1" frameborder="0"></iframe><a class="btn_close"><img src="../resources/website/common/images/btn_close.png"/></a></div></div>';

        $('body').append(html);

        return !1;
    })


    /*
     for news width resize can fit screen
     */
    fitNewsWidth();

    /*
     if ie7,8 and not support css3, will skip slide up down and show effect.
     */
    if(isIE())
        isIEAction();
    else
        notIEAction();

    /*
     for bio click boss name effect
     */
    $('.bio_a').each(function(i,e){
        $(e).click(function(){

            //remove all a element selected class
            $('.bio_a').removeClass('selected');

            //add selected element class "selected"
            $(e).addClass('selected');

            //can use css3
            if($.support.transition){
                //hide all boss content
                $('.bio_p').hide().css({
                    opacity: 0
                });

                //show selected boss detail
                $('.bio_p').eq(i)
                    .show()
                    .transition({
                        opacity: 1
                    },1400);
            } else {
                //not all effect only show and hide content
                $('.bio_p').hide();
                $('.bio_p').eq(i).show();
            }
        })
    })


    /*
     for news menu list click have effect, show and hide content

     - click menu
     if have opened class
     TRUE:
     nothing
     FALSE:
     - clear all opened class
     - add opened class to click element
     - give rel name (rel name is content class name, use rel contorl content show and off)
     -
     - hide all content
     - show clicked content


     */
    //- click menu
    $('.news_a').bind('click',function(){

        //if havent opened class
        if(!$(this).hasClass('opened')){

            $('.news_detail_jspArrowDown, .news_detail_jspArrowUp').addClass('jspDisabled');

            //- clear all opened class
            $('.news_a').removeClass('opened');

            //- add opened class to click element
            $(this).addClass('opened');

            //- give rel name (rel name is content class name, use rel contorl content show and off)
            var rel = $(this).attr('rel');

            if($.support.transition){
                //- hide all content
                $('.news_area .detail p').hide().css({
                    opacity: 0
                });

                //- show clicked content
                $('.news_area p.'+rel)
                    .show()
                    .transition({
                        opacity: 1
                    },1400);
            } else {
                //- hide all content
                $('.news_area .detail p').hide();

                //- show clicked content
                $('.news_area p.'+rel).show();
            }
        }
    })

    //click first news menu
    $('.news_a').eq(0).trigger('click');


    $('#subscription').keypress(function(e){
        if(e.keyCode == '13')
            $('.submit').trigger('click');
    })

    $('.submit').bind('click',function(){
        url = 'about/subscription_process';
        $.post(url,{
            'email' : $('#subscription').val()
        },function(e){
            if(e == '1'){
                $('#thankyou').show().delay(10000).fadeOut();
                $('#fail').hide();
                $('#subscription').val('');
            } else {
                $('#thankyou').hide()
                $('#fail').show();
            }
        })
    })

})