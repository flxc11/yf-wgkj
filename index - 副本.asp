<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<%=SiteKeysTitle("首页")%>
	<!--#include file="public.asp"-->
</head>
<body class="inxBody">
  <div class="homepage">
    <div class="topInfo">
    <a class="logo" href="/index.asp"><img src="images/logo.png" /></a>
	<div class="top_ser">
	  <span class="fr">
	    <a href="../www.siteserver.cn/download/" class="top_1a">产品下载</a>
	    <a href="../www.siteserver.cn/license/" class="top_1a">正版查询</a>
	    <a href="../www.siteserver.cn/exp/platform.html" class="top_1a">体验中心</a>
	    <a href="../stl.siteserver.cn" target="_blank" class="top_1a">新闻中心</a>
	    <a href="../www.siteserver.cn/bairongsoft/contactus.html" class="top_1a">联系我们</a>
	  </span>
	</div>
	<div class="navigation">
	  <ul>
	  	<div class="new-search clearfix">
	  		<input type="button" value=" " style="width: 23px;height: 23px;background: url(images/btnsearch.png);border:0;cursor:pointer;float:right;">
	  		<input type="text" value="搜索" name="keyword" id="keyword" class="ipt1">
	  	</div>
	    <li class="hidLi"><a class="navigation_a" href="../www.siteserver.cn/">首页</a></li>
	    <li class="subLi">
	      <a href="javascript:;" class="navigation_a">产品介绍</a>
	      <div class="navigation_hoverA navigation_hpos1">
	        <a href="javascript:;" class="navigation_2a">产品介绍</a>
	      </div>
	      <div class="hidden">
	        <div class="subCon1">
	          <div class="sub1_l">
	            <div class="sub1_dl">
	              <dl>
	                <dt>微信产品</dt>
	                <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from User_PageCategory where User_NavParent=2 order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  <dd><a href="product.asp?ClassID=<%=Rs("ID")%>"><%=Rs("User_NavTitle")%></a></dd>
	                  <%
					i=i+1
					Rs.MoveNext
					loop
					Rs.Close:Set Rs=Nothing
				%>
	              </dl>
	              <dl>
	                <dt>移动互联网</dt>
	                <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from User_PageCategory where User_NavParent=3 order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  <dd><a href="product.asp?ClassID=<%=Rs("ID")%>"><%=Rs("User_NavTitle")%></a></dd>
	                  <%
					i=i+1
					Rs.MoveNext
					loop
					Rs.Close:Set Rs=Nothing
				%>
	              </dl>
	            </div>
	            <div class="sub1_dl sub1_dl2"> 
	              <dl>
	                <dt>PC产品</dt>
	                  <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from User_PageCategory where User_NavParent=4 order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  <dd><a href="product.asp?ClassID=<%=Rs("ID")%>"><%=Rs("User_NavTitle")%></a></dd>
	                  <%
					i=i+1
					Rs.MoveNext
					loop
					Rs.Close:Set Rs=Nothing
					%>
	              </dl> 
	              <div class="sub1_btn" style="display: none;">
	                <a href="../www.siteserver.cn/download/" class="btn btn-success">
	                  产品下载
	                </a>
	                <a href="../www.siteserver.cn/exp/platform.html" class="btn">
	                  产品体验中心
	                </a>
	                <a href="../www.siteserver.cn/license/" class="btn">
	                  正版许可查询
	                </a>
	              </div>
	            </div>
	          </div>
	          <div class="sub1_r">
	            <a href="../www.siteserver.cn/products/cms.html" target="_blank">
	              <img src="images/sub1_img.jpg" width="161" height="89" />
	            </a>
	            <strong class="sub_1t">
	              <a href="../www.siteserver.cn/products/cms.html" class="new_corBlue">
	                SiteServer CMS<br />内容管理系统
	              </a>
	            </strong>
	            <div class="sub1_txt">
	              SiteServer CMS 能够以最低的成本、最少的人力投入在最短的时间内架设一个功能齐全、性能优异、规模庞大并易于维护的网站平台。 
	            </div>
	          </div>
	          <div class="clear"></div>
	        </div>
	        
	      </div>
	    </li>
	    <li class="subLi">
	      <a href="javascript:;" class="navigation_a">解决方案</a>
	      <div class="navigation_hoverA navigation_hpos2">
	        <a href="javascript:;" class="navigation_2a">解决方案</a>
	      </div>
	      <div class="hidden">
	        
	        <div class="subCon2">
	          <div class="sub1_dl sub2_dl">
	          <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from newsclass where id in(5,6) order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  
	            <dl>
	              <dt><%=Rs("NavTitle")%></dt>
	              <%
					Set Rst=Server.CreateObject("Adodb.RecordSet")
					Sqlt = "Select * from newsclass where NavParent="&Rs("ID")&" order by id asc"
					Rst.open Sqlt,Conn,1,1
					do while not Rst.Eof
				%>
	                <dd><a href="program.asp?ClassID=<%=Rst("ID")%>"><%=Rst("NavTitle")%></a></dd>
	              <%
					Rst.MoveNext
					loop
					Rst.Close:Set Rst=Nothing
					%>
	            </dl>
	            <%
					Rs.MoveNext
					loop
					Rs.Close:Set Rs=Nothing
					%>
	          </div>
	          <div class="sub1_dl sub2_dl">
	            <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from newsclass where id in(7,8,9) order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  
	            <dl>
	              <dt><%=Rs("NavTitle")%></dt>
	              <%
					Set Rst=Server.CreateObject("Adodb.RecordSet")
					Sqlt = "Select * from newsclass where NavParent="&Rs("ID")&" order by id asc"
					Rst.open Sqlt,Conn,1,1
					do while not Rst.Eof
				%>
	                <dd><a href="program.asp?ClassID=<%=Rst("ID")%>"><%=Rst("NavTitle")%></a></dd>
	              <%
					Rst.MoveNext
					loop
					Rst.Close:Set Rst=Nothing
					%>
	            </dl>
	            <%
					Rs.MoveNext
					loop
					Rs.Close:Set Rs=Nothing
					%>
	          </div>
	          <div class="sub2_r">
	            <a href="../www.siteserver.cn/solution/32.html" target="_blank">
	              <img src="images/sub2_img.jpg" width="161" height="89" />
	            </a>
	            <strong class="sub2_1t">
	              <a href="../www.siteserver.cn/solution/32.html" class="new_corBlue" target="_blank">
	                政府信息公开解决方案
	              </a>
	            </strong>
	            <div class="sub2_txt">有效解决政府在信息公开工作建设中面临的问题，保障了政府信息公开体系的建设效率，为各级政府机构快速建立政府信息公开提供了技术支持。 </div>
	          </div>
	          <div class="sub2_r">

	            <a href="../www.siteserver.cn/solution/33.html" target="_blank">
	              <img src="images/sub2_img2.jpg" width="161" height="89" />
	            </a>
	            <strong class="sub2_1t">
	              <a href="../www.siteserver.cn/solution/33.html" class="new_corBlue" target="_blank">
	                政府互动交流解决方案
	              </a>
	            </strong>

	            <div class="sub2_txt">政府互动交流解决方案提供网上市民交流平台，包括领导信箱、公众留言等，在网上受理市民提交的各类投诉、建议和咨询信息。 </div>
	          </div>
	        </div>
	        
	      </div>
	    </li>
	    <li class="subLi">
	      <a href="../www.siteserver.cn/case/" class="navigation_a">视频演示</a>
	      <div class="navigation_hoverA navigation_hpos1">
	        <a href="../www.siteserver.cn/case/" class="navigation_2a">视频演示</a>
	      </div>
	      <div class="hidden">
	        
	        <div class="subCon3">
	          <div class="sub3_l">
	            <div class="sub3_ul">
	              <ul>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/53.html" class="sub3_a">国家部委</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/54.html" class="sub3_a">政府部门</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/56.html" class="sub3_a">集团公司</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/55.html" class="sub3_a">事业单位</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/57.html" class="sub3_a">大型门户</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/60.html" class="sub3_a">电子商务</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/59.html" class="sub3_a">教育/学校</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/62.html" class="sub3_a">视频/互动</a>
	                  </li>
	                
	                  <li>
	                    <a href="../www.siteserver.cn/case/179.html" class="sub3_a">军网/内网</a>
	                  </li>
	                
	              </ul>
	              <div class="clear"></div>
	            </div>
	            <div class="sub3_dl">
	              <strong>近期案例</strong>
	              <dl>
	                
	                  <dd><a href="../www.pbh.yn.gov.cn" target="_blank">云南卫生厅</a></dd>
	                
	                  <dd><a href="../www.jianggan.gov.cn" target="_blank">杭州市江干区政府门户网站</a></dd>
	                
	                  <dd><a href="../www.siteserver.cn/case/53/165.html" target="_blank">新华社价格监测中心</a></dd>
	                
	                  <dd><a href="../myerp.yonyou.com" target="_blank">用友软件-U8+云支持中心</a></dd>
	                
	                  <dd><a href="../www.asean-china-centre.org" target="_blank">中国-东盟中心</a></dd>
	                
	                  <dd><a href="../www.gd218.org.cn" target="_blank">广东省对外贸易经济合作厅</a></dd>
	                
	                  <dd><a href="../www.cqfp.gov.cn" target="_blank">重庆市扶贫开发办公室</a></dd>
	                
	                  <dd><a href="../www.zgnybwg.com.cn" target="_blank">中国农业博物馆</a></dd>
	                
	              </dl>
	            </div>
	          </div>
	          <div class="sub2_r">
	            
	              <a href="../www.siteserver.cn/case/53/163.html" target="_blank"><img src="images/sub2_img3.jpg" width="161" height="89" /></a>
	              <strong class="sub2_1t"><a href="../www.siteserver.cn/case/53/163.html" class="new_corBlue" target="_blank">中国新闻出版总署</a></strong>
	              <div class="sub2_txt">2012年政府网站绩效评估中新闻总署在国家部委中的排名由30名上升到第15名，产品的安全性和压力承受能力得到了有力的证明。</div>
	            
	          </div>
	          <div class="sub2_r">
	            
	              <a href="../www.siteserver.cn/case/53/164.html" target="_blank"><img src="images/sub2_img4.jpg" width="161" height="89" /></a>
	              <strong class="sub2_1t"><a href="../www.siteserver.cn/case/53/164.html" class="new_corBlue" target="_blank">中国海岛网</a></strong>
	              <div class="sub2_txt">海岛政策法规、海岛保护与利用信息的通告平台，海岛工作和成果的集成展示平台，海岛自然和人文的宣传平台和海岛旅游的权威资讯平台。</div>
	            
	          </div>
	        </div>
	        
	      </div>
	    </li>
	    <li class="hidLi"><a class="navigation_a" href="../moban.siteserver.cn">成功案例</a></li>
	    <li class="hidLi"><a class="navigation_a" href="../help.siteserver.cn" target="_blank">关于我们</a></li>
	  </ul>
	  <div class="subnavigation"></div>
	</div>
</div>
    <div class="top-style"></div>
    <div class="top">
      <div class="column">
        <div class="dots">
          <span class="dot" goto="0"><a href="javascript:;" onclick="s_objectID=&quot;#_1&quot;;return this.s_oc?this.s_oc(e):true" style="color: rgb(255, 255, 255); ">•</a></span>
          <span class="dot" goto="1"><a href="javascript:;" onclick="s_objectID=&quot;#_2&quot;;return this.s_oc?this.s_oc(e):true" style="color: rgb(54, 82, 108); ">•</a></span>
          <span class="dot" goto="2"><a href="javascript:;" onclick="s_objectID=&quot;#_3&quot;;return this.s_oc?this.s_oc(e):true" style="color: rgb(255, 255, 255); ">•</a></span>
          <span class="dot" goto="3"><a href="javascript:;" onclick="s_objectID=&quot;#_4&quot;;return this.s_oc?this.s_oc(e):true" style="color: rgb(255, 255, 255); ">•</a></span>
          <span class="dot" goto="4"><a href="javascript:;" onclick="s_objectID=&quot;#_5&quot;;return this.s_oc?this.s_oc(e):true" style="color: rgb(255, 255, 255); ">•</a></span>
        </div>
      </div>
    </div>
    <div class="slideshow">
	    <div class="slide slide-1">
	        <img class="left" src="images/marquee_left.png">
	        <img src="images/banner/banner_electronicbusiness.jpg">
	        <img class="right" src="images/marquee_right.png">
	        <div class="overlay">
	          <h3>电子商务解决方案</h3> 
	          <div class="info"> 
	            pc商城、手机商城、微信商城<br/>
	            提供整合PC互联网、移动互联网、公众号、<br/>APP等多网多屏合一的电子商务全面解决方案
	          </div>
	          <div class="link">
	            <a href="../www.siteserver.cn/solution/38.html">
	              <span>了解更多信息 »</span>
	            </a>
	          </div>
	        </div>
	    </div>
	    <div class="slide slide-2">
	        <img class="left" src="images/marquee_left.png">
	        <img src="images/banner/banner_weixin.jpg">
	        <img class="right" src="images/marquee_right.png">
	        <div class="overlay">
	          <h3>SiteServer WeiXin</h3>
	          <h3>微信管理系统</h3>
	          <div class="info">微信公众平台量身定制开发之利器<br /> 
	            以最低成本迈入移动互联网时代
	          </div>
	          <div class="link">
	            <a href="../www.siteserver.cn/products/weixin.html">
	              <span>了解更多信息 »</span>
	            </a>
	          </div>
	        </div>
	    </div>
	    <div class="slide slide-3">
	        <img class="left" src="images/marquee_left.png">
	        <img src="images/banner/banner_cms.jpg">
	        <img class="right" src="images/marquee_right.png">
	        <div class="overlay">
	          <h3>SiteServer CMS</h3>
	          <h3>内容管理系统</h3>
	          <div class="info">十年积累，我们是.NET平台CMS系统创始者！</div>
	          <div class="link">
	            <a href="../www.siteserver.cn/products/cms.html">
	              <span>从这里开始 »</span>
	            </a>
	          </div>
	        </div>
	    </div>
	    <div class="slide slide-4">
	        <img class="left" src="images/marquee_left.png">
	        <img src="images/banner/banner_case.jpg">
	        <img class="right" src="images/marquee_right.png">
	        <div class="overlay">
	          <h3>成功案例</h3>
	          <h3>Success Case</h3>
	          <div class="info">经过10余年的发展，和3000多家政府
	            <br>及大中型企业签订了服务协议</div>
	          <div class="link">
	            <a href="../www.siteserver.cn/case/">
	              <span>从这里开始 »</span>
	            </a>
	          </div>
	        </div>
	    </div>
	    <div class="slide slide-5">
	        <img class="left" src="images/marquee_left.png">
	        <img src="images/banner/banner_productline.jpg">
	        <img class="right" src="images/marquee_right.png">
	        <div class="overlay" style="display: none; left: 40%; ">
	          <h2>SITESERVER</h2>
	          <div class="info">
	            完整产品线 整体解决方案
	            <br>
	            Product line Complete solution
	          </div>
	          <div class="link">
	            <a href="../www.siteserver.cn/download/">
	              <span>了解更多信息 »</span>
	            </a>
	          </div>
	        </div>
	    </div>
    </div>
  </div>
	<div class="topnews">
		<div class="mc1 clearfix">
      <h2>新闻：</h2>
        <div class="mc1_l" id="scrollDiv">
          <ul>
            
            <li><a href="../www.siteserver.cn/bairongsoft/news/2007.html" target="_blank" class="mcl_a">SiteServer推出免费微信公众号管理平台 — 阁下网</a></li>
            
            <li><a href="../www.siteserver.cn/bairongsoft/news/2006.html" target="_blank" class="mcl_a">2013,第四届SiteServer CMS模版设计大赛正式启动！</a></li>
            
            <li><a href="../www.siteserver.cn/bairongsoft/news/2003.html" target="_blank" class="mcl_a">SiteServer 系列产品 3.6.4 正式发布（2013年8月8日）</a></li>
            
            <li><a href="../www.siteserver.cn/bairongsoft/news/2001.html" target="_blank" class="mcl_a">百容千域软件成立重庆办事处（2013年8月1日）</a></li>
            
            <li><a href="../bbs.siteserver.cn/thread-8-292184.aspx" target="_blank" class="mcl_a">STL 语言最新版本参考手册正式发布</a></li>
            
            <li><a href="../www.siteserver.cn/bairongsoft/news/1996.html" target="_blank" class="mcl_a">热烈庆祝藏游天下网站（czang.com）上线</a></li>
            
          </ul>
        </div>
    </div>
	</div>
  <!-- main Start -->
  <div class="mainBg">
    <div class="main">
    
      <div class="mc2">
        <div id="mc2_alrBox1" class="mc2_alrBox mc2_alrBox1">
          <img src="images/proName1.jpg" width="105" height="41" />
          
            <dl>
              <dt>微信产品</dt>
              
                <dd><a href="../www.siteserver.cn/products/weixin.html">SiteServer WX 微信管理系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/weixinb2c.html">SiteServer WX B2C 微信商城系统</a></dd>
              
            </dl>
          
            <dl>
              <dt>移动互联网</dt>
              
                <dd><a href="../www.siteserver.cn/products/mobileb2c.html">SiteServer Mobile B2C 手机商城系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/mobilecms.html">SiteServer Mobile CMS 手机内容管理</a></dd>
              
            </dl>
          
            <dl>
              <dt>PC产品</dt>
              
                <dd><a href="../www.siteserver.cn/products/cms.html">SiteServer CMS 内容管理系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/b2c.html">SiteServer B2C 电子商务系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/wcm.html">SiteServer WCM 内容协作平台</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/govpublic.html">SiteServer GovPublic 信息公开系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/govinteract.html">SiteServer GovInteract 互动交流系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/bbs.html">SiteServer BBS 论坛系统</a></dd>
              
                <dd><a href="../www.siteserver.cn/products/service.html">SiteServer Service 服务组件</a></dd>
              
            </dl>
          
        </div>
        <div id="mc2_alrBoxAliyun" class="mc2_alrBox mc2_alrBox2">
          <img src="images/proName3.png" />
            <dl>
                <dt>云系列产品</dt>
                <dd><a href="../market.aliyun.com/shop/product_detail.htm?spm=0.0.0.0.zCfG2r&productId=cmjz000030" target="_blank">SiteServer CMS 单站点版本 + 云服务器</a></dd>
                <dd><a href="../market.aliyun.com/shop/product_detail.htm?spm=0.0.0.0.RFh8KF&productId=cmjz000031" target="_blank">SiteServer CMS 多站点版本 + 云服务器</a></dd>
                <dd><a href="../market.aliyun.com/shop/product_detail.htm?spm=0.0.0.0.JejIGr&productId=cmjz000032" target="_blank">SiteServer BBS 论坛系统 + 云服务器</a></dd>
            </dl>
        </div> 
        <div class="mc2_boxList">
          <ul>
            <li showID="mc2_alrBox1"><img src="images/msc1.jpg" /></li>
            <li showID="mc2_alrBoxAliyun">
               <img src="images/msc5.jpg" />
            </li>
            <li><a href="../www.siteserver.cn/bairongsoft/news/2007.html" target="_blank">
              <img src="images/msc4.jpg" /></a></li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <!-- main End -->
  <!--#include file="footer.asp"-->
</body>
</html>

<!--#include file="bottomjs.html"-->