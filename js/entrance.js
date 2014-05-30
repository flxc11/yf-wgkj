STK.register("comp.cover.focusPicture",function(b){var c="switch";var a=b.sizzle('[node-type="pics"]')[0].getElementsByTagName("li");return function(j,g){var d=0,f=Math.min(j.length,g.length),i=false,e;function h(l,k){if(!j[l]||!j[k]){return}j[l].style.display="none";b.core.dom.setStyle(j[k],"opacity",0);j[k].style.display="";if(j[k]==a[0]){j[k].parentNode.className="bg_color1"}if(j[k]==a[1]){j[k].parentNode.className="bg_color2"}if(j[k]==a[2]){j[k].parentNode.className="bg_color3"}if(j[k]==a[3]){j[k].parentNode.className="bg_color4"}b.tween(j[k],{end:function(){i=false;d=k},animationType:"linear",duration:300}).play({opacity:1});b.custEvent.fire(e,c,{index:k,preIndex:l})}e={switchTo:function(k){if(!i){i=true;h(d,k)}},getIndex:function(){return d},destroy:function(){}};b.custEvent.define(e,[c]);return e}});STK.register("kit.extra.language",function(a){window.$LANG||(window.$LANG={});return function(b,c){var d=a.core.util.language(b,$LANG);d=d.replace(/\\}/ig,"}");if(c){d=a.templet(d,c)}return d}});STK.register("kit.extra.reuse",function(a){return function(e,j){var i,h,b;i=a.parseParam({},j);b=[];var f=function(){var k=e();b.push({store:k,used:true});return k};var g=function(k){a.foreach(b,function(m,l){if(k===m.store){m.used=true;return false}})};var d=function(k){a.foreach(b,function(m,l){if(k===m.store){m.used=false;return false}})};var c=function(){for(var l=0,k=b.length;l<k;l+=1){if(b[l]["used"]===false){b[l]["used"]=true;return b[l]["store"]}}return f()};h={};h.setUsed=g;h.setUnused=d;h.getOne=c;h.getLength=function(){return b.length};return h}});STK.register("module.layer",function(b){var c=function(e){var d={};if(e.style.display=="none"){e.style.visibility="hidden";e.style.display="";d.w=e.offsetWidth;d.h=e.offsetHeight;e.style.display="none";e.style.visibility="visible"}else{d.w=e.offsetWidth;d.h=e.offsetHeight}return d};var a=function(g,f){f=f||"topleft";var e=null;if(g.style.display=="none"){g.style.visibility="hidden";g.style.display="";e=b.core.dom.position(g);g.style.display="none";g.style.visibility="visible"}else{e=b.core.dom.position(g)}if(f!=="topleft"){var d=c(g);if(f==="topright"){e.l=e.l+d.w}else{if(f==="bottomleft"){e.t=e.t+d.h}else{if(f==="bottomright"){e.l=e.l+d.w;e.t=e.t+d.h}}}}return e};return function(h){var k=b.core.dom.builder(h);var g=k.list.outer[0],e=k.list.inner[0];var j=b.core.dom.uniqueID(g);var i={};var d=b.core.evt.custEvent.define(i,"show");b.core.evt.custEvent.define(d,"hide");var f=null;i.show=function(){g.style.display="";b.core.evt.custEvent.fire(d,"show");return i};i.hide=function(){g.style.display="none";b.custEvent.fire(d,"hide");return i};i.getPosition=function(l){return a(g,l)};i.getSize=function(l){if(l||!f){f=c.apply(i,[g])}return f};i.html=function(l){if(l!==undefined){e.innerHTML=l}return e.innerHTML};i.text=function(l){if(text!==undefined){e.innerHTML=b.core.str.encodeHTML(l)}return b.core.str.decodeHTML(e.innerHTML)};i.appendChild=function(l){e.appendChild(l);return i};i.getUniqueID=function(){return j};i.getOuter=function(){return g};i.getInner=function(){return e};i.getParentNode=function(){return g.parentNode};i.getDomList=function(){return k.list};i.getDomListByKey=function(l){return k.list[l]};i.getDom=function(m,l){if(!k.list[m]){return false}return k.list[m][l||0]};i.getCascadeDom=function(m,l){if(!k.list[m]){return false}return b.core.dom.cascadeNode(k.list[m][l||0])};return i}});STK.register("module.dialog",function(a){return function(n,o){if(!n){throw"module.dialog need template as first parameter"}var k,g,h,f,l,j,q,i,b,c,m,e;b=true;var d=function(){if(b!==false){g.hide()}};var p=function(){k=a.parseParam({t:null,l:null,width:null,height:null},o);g=a.module.layer(n,k);f=g.getOuter();l=g.getDom("title");i=g.getDom("title_content");j=g.getDom("inner");q=g.getDom("close");a.addEvent(q,"click",function(){m()});a.custEvent.add(g,"show",function(){a.hotKey.add(document.documentElement,["esc"],d,{type:"keyup",disableInInput:true})});a.custEvent.add(g,"hide",function(){a.hotKey.remove(document.documentElement,["esc"],d,{type:"keyup"});b=true})};p();e=a.objSup(g,["show","hide"]);m=function(r){if(typeof c==="function"&&!r){if(c()===false){return false}}e.hide();if(a.contains(document.body,g.getOuter())){document.body.removeChild(g.getOuter())}return h};h=g;h.show=function(){if(!a.contains(document.body,g.getOuter())){document.body.appendChild(g.getOuter())}e.show();return h};h.hide=m;h.setPosition=function(r){f.style.top=r.t+"px";f.style.left=r.l+"px";return h};h.setMiddle=function(){var v=a.core.util.winSize();var x=g.getSize(true);var t=parent||window;var w;w=STK.core.util.scrollPos().top+(t.STK.core.util.winSize().height-x.h)/2;if($CONFIG.scroll){w=($CONFIG.scroll.scrollTop-$CONFIG.scroll.top)+($CONFIG.scroll.height-x.h)/2;var r=v.height-x.h;if(r<w){w=r}var u=(x.h+((w>30)?w:30))-v.height;if(u&&u>0){var s=a.C("div");s.style.height=u+"px";document.body.appendChild(s)}}else{w=a.core.util.scrollPos()["top"]+(v.height-x.h)/2}f.style.top=((parseInt(w)>30)?w:30)+"px";f.style.left=(v.width-x.w)/2+"px";return h};h.setTitle=function(r){i.innerHTML=r;return h};h.setContent=function(r){if(typeof r==="string"){j.innerHTML=r}else{j.appendChild(r)}return h};h.clearContent=function(){while(j.children.length){a.removeNode(j.children[0])}return h};h.setAlign=function(){};h.setBeforeHideFn=function(r){c=r};h.clearBeforeHideFn=function(){c=null};h.unsupportEsc=function(){b=false};h.supportEsc=function(){b=true};return h}});STK.register("kit.dom.cssText",function(b){var a=function(f,e){var c=(f+";"+e).replace(/(\s*(;)\s*)|(\s*(:)\s*)/g,"$2$4"),d;while(c&&(d=c.match(/(^|;)([\w\-]+:)([^;]*);(.*;)?\2/i))){c=c.replace(d[1]+d[2]+d[3],"")}return c};return function(d){d=d||"";var e=[],c={push:function(g,f){e.push(g+":"+f);return c},remove:function(g){for(var f=0;f<e.length;f++){if(e[f].indexOf(g+":")==0){e.splice(f,1)}}return c},getStyleList:function(){return e.slice()},getCss:function(){return a(d,e.join(";"))}};return c}});STK.register("kit.dom.fix",function(d){var a=!(d.core.util.browser.IE6||(document.compatMode!=="CSS1Compat"&&STK.IE)),b=/^(c)|(lt)|(lb)|(rt)|(rb)$/;function c(g){return d.core.dom.getStyle(g,"display")!="none"}function e(h){h=d.core.arr.isArray(h)?h:[0,0];for(var g=0;g<2;g++){if(typeof h[g]!="number"){h[g]=0}}return h}function f(j,r,m){if(!c(j)){return}var q="fixed",t,u,g,p,k=j.offsetWidth,l=j.offsetHeight,n=d.core.util.winSize(),o=0,s=0,h=d.kit.dom.cssText(j.style.cssText);if(!a){q="absolute";var i=d.core.util.scrollPos();o=t=i.top;s=u=i.left;switch(r){case"lt":t+=m[1];u+=m[0];break;case"lb":t+=n.height-l-m[1];u+=m[0];break;case"rt":t+=m[1];u+=n.width-k-m[0];break;case"rb":t+=n.height-l-m[1];u+=n.width-k-m[0];break;case"c":default:t+=(n.height-l)/2+m[1];u+=(n.width-k)/2+m[0]}g=p=""}else{t=p=m[1];u=g=m[0];switch(r){case"lt":p=g="";break;case"lb":t=g="";break;case"rt":u=p="";break;case"rb":t=u="";break;case"c":default:t=(n.height-l)/2+m[1];u=(n.width-k)/2+m[0];p=g=""}}if(r=="c"){if(t<o){t=o}if(u<s){u=s}}h.push("position",q).push("top",t+"px").push("left",u+"px").push("right",g+"px").push("bottom",p+"px");j.style.cssText=h.getCss()}return function(h,n,i){var j,o,k=true,g;if(d.core.dom.isNode(h)&&b.test(n)){var l={getNode:function(){return h},isFixed:function(){return k},setFixed:function(p){(k=!!p)&&f(h,j,o);return this},setAlign:function(p,q){if(b.test(p)){j=p;o=e(q);k&&f(h,j,o)}return this},destroy:function(){if(!a){a&&d.core.evt.removeEvent(window,"scroll",m)}d.core.evt.removeEvent(window,"resize",m);d.core.evt.custEvent.undefine(g)}};g=d.core.evt.custEvent.define(l,"beforeFix");l.setAlign(n,i);function m(p){p=p||window.event;d.core.evt.custEvent.fire(g,"beforeFix",p.type);if(k&&(!a||j=="c")){f(h,j,o)}}if(!a){d.core.evt.addEvent(window,"scroll",m)}d.core.evt.addEvent(window,"resize",m);return l}}});STK.register("module.mask",function(e){var k,c=[],b,j=false,a="STK-Mask-Key";var g=e.core.dom.setStyle,i=e.core.dom.getStyle,h=e.core.evt.custEvent;function d(){k=e.C("div");var m='<div node-type="outer">';if(e.core.util.browser.IE6){m+='<div style="position:absolute;width:100%;height:100%;"></div>'}m+="</div>";k=e.builder(m).list.outer[0];document.body.appendChild(k);j=true;b=e.kit.dom.fix(k,"lt");var n=function(){var o=e.core.util.winSize();k.style.cssText=e.kit.dom.cssText(k.style.cssText).push("width",o.width+"px").push("height",o.height+"px").getCss()};h.add(b,"beforeFix",n);n()}function l(m){var n;if(!(n=m.getAttribute(a))){m.setAttribute(a,n=e.getUniqueKey())}return">"+m.tagName.toLowerCase()+"["+a+'="'+n+'"]'}var f={getNode:function(){return k},show:function(n,m){if(j){n=e.core.obj.parseParam({opacity:0.3,background:"#000000"},n);k.style.background=n.background;g(k,"opacity",n.opacity);k.style.display="";b.setAlign("lt");m&&m()}else{e.Ready(function(){d();f.show(n,m)})}return f},hide:function(){k.style.display="none";nowIndex=undefined;c=[];return f},showUnderNode:function(n,m){if(e.isNode(n)){f.show(m,function(){g(k,"zIndex",i(n,"zIndex"));var p=l(n);var o=e.core.arr.indexOf(c,p);if(o!=-1){c.splice(o,1)}c.push(p);e.core.dom.insertElement(n,k,"beforebegin")})}return f},back:function(){if(c.length<1){return f}var n,m;c.pop();if(c.length<1){f.hide()}else{if((m=c[c.length-1])&&(n=e.sizzle(m,document.body)[0])){g(k,"zIndex",i(n,"zIndex"));e.core.dom.insertElement(n,k,"beforebegin")}else{f.back()}}return f},destroy:function(){h.remove(b);k.style.display="none";lastNode=undefined;_cache={}}};return f});STK.register("kit.dom.drag",function(a){return function(d,p){var h,g,n,l,c,k,e,i;var q=function(){f();j()};var f=function(){h=a.parseParam({moveDom:d,perchStyle:"border:solid #999999 2px;",dragtype:"perch",actObj:{},pagePadding:5},p);n=h.moveDom;g={};l={};c=a.drag(d,{actObj:h.actObj});if(h.dragtype==="perch"){k=a.C("div");e=false;i=false;n=k}d.style.cursor="move"};var j=function(){a.custEvent.add(h.actObj,"dragStart",m);a.custEvent.add(h.actObj,"dragEnd",b);a.custEvent.add(h.actObj,"draging",o)};var m=function(r,u){document.body.style.cursor="move";var t=a.core.util.pageSize()["page"];l=a.core.dom.position(h.moveDom);l.pageX=u.pageX;l.pageY=u.pageY;l.height=h.moveDom.offsetHeight;l.width=h.moveDom.offsetWidth;l.pageHeight=t.height;l.pageWidth=t.width;if(h.dragtype==="perch"){var s=[];s.push(h.perchStyle);s.push("position:absolute");s.push("z-index:"+(h.moveDom.style.zIndex+10));s.push("width:"+h.moveDom.offsetWidth+"px");s.push("height:"+h.moveDom.offsetHeight+"px");s.push("left:"+l.l+"px");s.push("top:"+l.t+"px");k.style.cssText=s.join(";");i=true;setTimeout(function(){if(i){document.body.appendChild(k);e=true}},100)}if(d.setCapture!==undefined){d.setCapture()}};var b=function(r,s){document.body.style.cursor="auto";if(d.setCapture!==undefined){d.releaseCapture()}if(h.dragtype==="perch"){i=false;h.moveDom.style.top=k.style.top;h.moveDom.style.left=k.style.left;if(e){document.body.removeChild(k);e=false}}};var o=function(t,A){var z=l.t+(A.pageY-l.pageY);var s=l.l+(A.pageX-l.pageX);var u=z+l.height;var v=s+l.width;var r=l.pageHeight-h.pagePadding;var w=l.pageWidth-h.pagePadding;if(u<r&&z>0){n.style.top=z+"px"}else{if(z<0){n.style.top="0px"}if(u>=r){n.style.top=r-l.height+"px"}}if(v<w&&s>0){n.style.left=s+"px"}else{if(s<0){n.style.left="0px"}if(v>=w){n.style.left=w-l.width+"px"}}};q();g.destroy=function(){document.body.style.cursor="auto";if(typeof n.setCapture==="function"){n.releaseCapture()}if(h.dragtype==="perch"){i=false;if(e){document.body.removeChild(k);e=false}}a.custEvent.remove(h.actObj,"dragStart",m);a.custEvent.remove(h.actObj,"dragEnd",b);a.custEvent.remove(h.actObj,"draging",o);if(c.destroy){c.destroy()}h=null;n=null;l=null;c=null;k=null;e=null;i=null};g.getActObj=function(){return h.actObj};return g}});STK.register("ui.dialog",function(d){var c='<div class="W_layer" node-type="outer" style="display:none;position:absolute;z-index:10001"><div class="bg"><table border="0" cellspacing="0" cellpadding="0"><tr><td><div class="content"><div class="title" node-type="title"><span node-type="title_content"></span></div><a href="javascript:void(0);" class="W_close" title="#L{关闭}" node-type="close"></a><div node-type="inner"></div></div></td></tr></table></div></div>';var e=d.kit.extra.language;var b=null;var a=function(){var g=d.module.dialog(e(c));d.custEvent.add(g,"show",function(){d.module.mask.showUnderNode(g.getOuter())});d.custEvent.add(g,"hide",function(){d.module.mask.back();g.setMiddle()});d.kit.dom.drag(g.getDom("title"),{actObj:g,moveDom:g.getOuter()});g.destroy=function(){f(g);try{g.hide(true)}catch(h){}};return g};var f=function(g){g.setTitle("").clearContent();b.setUnused(g)};return function(g){var h=d.parseParam({isHold:false},g);var j=h.isHold;h=d.core.obj.cut(h,["isHold"]);if(!b){b=d.kit.extra.reuse(a)}var i=b.getOne();if(!j){d.custEvent.add(i,"hide",function(){d.custEvent.remove(i,"hide",arguments.callee);f(i)})}return i}});STK.register("comp.cover.focusPic",function(a){return function(c){var g;var n='<div class="layer_point layer_login_index w360"><p class="W_f14 W_bold">尊敬的用户您好！</p><p class="W_textb">如果您希望将当前的微博个人账号升级成为企业微博账号，请点击：</p><p><a class="W_btn_e_layer_login" href="http://verified.weibo.com/verify/apply?pageid=enterprise" target="_blank" suda-uatrack="key=enterpriseguide&value=004"><span>补充企业认证信息升级成为企业微博</span></a></p><p class="W_textb">如果您希望注册新的微博账号并开通企业微博，请点击：</p><p><a class="W_btn_e_layer_login" node-type="quit" href="javascript:void(0);" suda-uatrack="key=enterpriseguide&value=005"><span>注册新的账号并认证成为企业微博</span></a></p></div>';var d='<div class="layer_point layer_login_index w340"><p class="W_f14 W_bold">尊敬的用户您好！</p><p class="W_f14">企业版仅适用于企业认证账号，如果您希望将当前的微博账号变成为企业微博账号，请私信 <b class="W_spetxt">@企业认证服务</b> 或 拨打客服电话 <b class="W_spetxt">4000 980 980 </b>进行咨询。</p></div>';var b=a.sizzle('[node-type="pics"]')[0].getElementsByTagName("li"),i=a.sizzle("[class=slide_tab]",c)[0].getElementsByTagName("li"),j=a.comp.cover.focusPicture(b,i),k,f=0,e=b.length;var m=function(){if(e==1){return}clearInterval(k);k=setInterval(function(){j.switchTo(++f%e)},5000)};function l(){var o=i.length;var p=a.sizzle('[node-type="loginBtn"]')[0];while(o--){a.addEvent(i[o],"click",(function(q){return function(){if(q==f){return}j.switchTo(q);m()}})(o))}a.addEvent(p,"click",(function(){if($CONFIG.islogin=="0"){window.open(p.getAttribute("url")||"http://e.weibo.com/register/register")}if($CONFIG.islogin=="1"){if($CONFIG.verified=="-1"){g=a.ui.dialog();g.setTitle("提示");g.setContent(n);g.show();g.setMiddle()}var q=(a.sizzle('[node-type="quit"]')[0]);a.addEvent(q,"click",(function(){setTimeout(function(){window.location.href="http://weibo.com/logout.php?backurl=http://e.weibo.com/register/register&lang=zh-cn"},10)}));if($CONFIG.verified=="1"){if($CONFIG.verified_type=="0"||"1"||"3"||"4"||"5"||"6"||"7"){g=a.ui.dialog();g.setTitle("提示");g.setContent(d);g.show();g.setMiddle()}}}}));a.custEvent.add(j,"switch",function(r,q){f=q.index;i[q.preIndex]&&(i[q.preIndex].className="");i[q.index]&&(i[q.index].className="current")});m()}var h={destroy:function(){}};l();return h}});STK.pageletM.register("pl.cover.focusPic",function(b){var a=b.E("pl_cover_focusPic");return b.comp.cover.focusPic(a)});STK.register("kit.dom.parseDOM",function(a){return function(c){for(var b in c){if(c[b]&&(c[b].length==1)){c[b]=c[b][0]}}return c}});STK.register("comp.cover.changePic",function(b){var a={PRE:"PRE",NEXT:"NEXT"};return function(q,h){var i={};var n,v,x=false,e=250;var g=b.core.dom.getStyle;var r={trans:{},DOM:{}};var o=function(y,A){var z=b.sizzle(".SC_icon_arrow",A);z[0].style.display=y?"none":"block";z[1].style.display=y?"block":"none"};var k=function(y){var z=parseInt(g(n,"left"))||0;var A=(y===a.PRE)?e:(-1)*e;v=b.core.ani.tween(n,{duration:500,animationType:"easeoutcubic",end:function(){if(y===a.NEXT){var B=n.firstChild;n.appendChild(B);n.style.left="0"}x=false}}).play({left:z+A})};var p=function(){if(!q){throw new Error("node没有定义")}};var d=function(){r.DOM=b.kit.dom.parseDOM(b.builder(q).list);n=r.DOM.container;var y=n.childNodes.length;for(var z=y-1;z>=0;z--){if(n.childNodes[z].nodeType==3||n.childNodes[z].nodeType==8){n.removeChild(n.childNodes[z])}}e=b.core.dom.getSize(n.parentNode)["width"]};var u=function(){};var f=function(){if(n.childNodes.length>h){b.addEvent(r.DOM.preBtn,"click",function(){if(!x){c.showPre()}});b.addEvent(r.DOM.nextBtn,"click",function(){if(!x){c.showNext()}})}else{o(false,r.DOM.preBtn);o(false,r.DOM.nextBtn)}};var j=function(){};var l=function(){};var w=function(){};var c={showPre:function(){var y=n.lastChild;n.insertBefore(y,n.firstChild);n.style.left=0-e+"px";x=true;k(a.PRE)},showNext:function(){x=true;k(a.NEXT)}};var t={};var m={};var s=function(){p();d();u();f();j();l()};s();i.destroy=w;return i}});STK.pageletM.register("pl.cover.changePic",function(c){var b=c.E("pl_cover_changePic");var a=c.comp.cover.changePic(b,3);return a});STK.pageletM.start();