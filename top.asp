<div class="topInfo" style="height:121px;">
    <a class="logo" href="/index.asp"><img src="images/logo.png" /></a>
	<div class="top_ser">
	  <span class="fr">
	    <a href="javascript:;" class="top_1a">产品下载</a>
	    <a href="javascript:;" class="top_1a">正版查询</a>
	    <a href="javascript:;" class="top_1a">体验中心</a>
	    <a href="javascript:;" target="_blank" class="top_1a">新闻中心</a>
	    <a href="javascript:;" class="top_1a">联系我们</a>
	  </span>
	</div>
	<div class="navigation">
	  <ul>
	  	<form action="search.asp" method="post" name="form1">
	  	<div class="new-search clearfix">
	  		<input type="submit" value=" " style="width: 23px;height: 23px;background: url(images/btnsearch.png);border:0;cursor:pointer;float:right;">
	  		<input type="text" value="搜索" name="keyword" id="keyword" class="ipt1">
	  	</div>
	  	</form>
	    <li class="hidLi"><a class="navigation_a" href="/index.asp">首页</a></li>
	    <li class="subLi">
	      <a href="product.asp" class="navigation_a">产品介绍</a>
	      <div class="navigation_hoverA navigation_hpos1">
	        <a href="product.asp" class="navigation_2a">产品介绍</a>
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
	            <a href="javascript:;" target="_blank">
	              <img src="images/sub1_img.jpg" width="161" height="89" />
	            </a>
	            <strong class="sub_1t">
	              <a href="javascript:;" class="new_corBlue">
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
	      <a href="program.asp" class="navigation_a">解决方案</a>
	      <div class="navigation_hoverA navigation_hpos2">
	        <a href="program.asp" class="navigation_2a">解决方案</a>
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
	            <a href="javascript:;" target="_blank">
	              <img src="images/sub2_img.jpg" width="161" height="89" />
	            </a>
	            <strong class="sub2_1t">
	              <a href="javascript:;" class="new_corBlue" target="_blank">
	                政府信息公开解决方案
	              </a>
	            </strong>
	            <div class="sub2_txt">有效解决政府在信息公开工作建设中面临的问题，保障了政府信息公开体系的建设效率，为各级政府机构快速建立政府信息公开提供了技术支持。 </div>
	          </div>
	          <div class="sub2_r">

	            <a href="javascript:;" target="_blank">
	              <img src="images/sub2_img2.jpg" width="161" height="89" />
	            </a>
	            <strong class="sub2_1t">
	              <a href="javascript:;" class="new_corBlue" target="_blank">
	                政府互动交流解决方案
	              </a>
	            </strong>

	            <div class="sub2_txt">政府互动交流解决方案提供网上市民交流平台，包括领导信箱、公众留言等，在网上受理市民提交的各类投诉、建议和咨询信息。 </div>
	          </div>
	        </div>
	        
	      </div>
	    </li>
	    <li class="hidLi">
	      <a href="video.asp" class="navigation_a">视频演示</a>
	      <div class="navigation_hoverA navigation_hpos1">
	        <a href="video.asp" class="navigation_2a">视频演示</a>
	      </div>
	      
	    </li>
	    <li class="hidLi"><a class="navigation_a" href="case.asp">成功案例</a></li>
	    <li class="hidLi"><a class="navigation_a" href="about.asp">关于我们</a></li>
	  </ul>
	  <div class="subnavigation"></div>
	</div>
</div>