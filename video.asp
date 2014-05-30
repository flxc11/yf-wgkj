<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->
<%
	ClassID=ReplaceBadChar(Trim(Request("ClassID")))

	if ClassID="" or IsNumEric(ClassID)=false then
		'Set Rs1=Server.CreateObject("Adodb.RecordSet")
		'Sql1 = "select top 1 * from newsclass where NavParent=3 order by ID asc"
		'Rs1.Open Sql1,Conn,1,1
		ClassID = 3
	else
		ClassID = ClassID
	end if

%>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<%=SiteKeysTitle("视屏演示")%>
	<!--#include file="public.asp"-->
	<link rel="stylesheet" href="css/css.css">
</head>
<body class="inxBody">
	<div class="header">
		<!--#include file="top.asp"-->
	</div>
	<div class="ny-banner"></div>
	<div class="position">
		<div class="in-position">
			<a href="/index.asp">首页</a><%=GetNavPath("newsclass",ClassID)%>
		</div>
	</div>
	<div class="wrap clearfix">
		<div class="wrap-r">
			<div class="third-nav" style="margin: 0">
				<div class="cnvp-tab-nav T clearfix">
	                <a href="javascript:void(0);" class="index_tabshover"><%=GetSubNavName("newsclass", ClassID)%></a>
	            </div>
	            <div class="cnvp-tab-panle C video">
					<ul class="clearfix">
						
						<%
						Set Rs=Server.CreateObject("Adodb.RecordSet")
						Sql = "Select * From newsinfo Where ClassID In ("&ClassID&GetAllChild("newsclass",ClassID)&") order by NewsOrder desc"
						Rs.Open Sql,Conn,1,1
						Dim Page
						Page=Request("Page")                            
						PageSize = 5                                    
						Rs.PageSize = PageSize               
						Total=Rs.RecordCount               
						PGNum=Rs.PageCount               
						If Page="" Or clng(Page)<1 Then Page=1               
						If Clng(Page) > PGNum Then Page=PGNum               
						If PGNum>0 Then Rs.AbsolutePage=Page                         
						i=0
						Do While Not Rs.Eof And i<Rs.PageSize
					%>
					<li>
							<a href="javascript:;" target="_blank" class="link-pic" data-title="<%=Rs("NewsTitle")%>" data-video="<%=Rs("video")%>">
							<img src="<%=Rs("NewsSPic")%>" alt="">
							<div class="video-bg"></div>
							</a>
							<span><a href="javascript:;" target="_blank"><%=Rs("NewsTitle")%></a></span>
						</li>
					<%
						i=i+1
						Rs.MoveNext
						Loop
					%>
					<div class="NewsPage"><%=GetPage1("Where ClassID in ("&ClassID&GetAllChild("newsClass",ClassID)&")","newsinfo",9,0)%></div>
					</ul>
	            </div>
			</div>
		</div>
		<div class="wrap-l">
			<div class="column">
				<h2 class="h2">视频演示<em>Video Demo</em></h2>

				<%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from newsclass where NavParent=3 order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  
	            <div class="ny-subnav">
	              <h2><%=Rs("NavTitle")%></h2>
	              	<ul>
	              	<%
						Set Rst=Server.CreateObject("Adodb.RecordSet")
						Sqlt = "Select * from newsclass where NavParent="&Rs("ID")&" order by id asc"
						Rst.open Sqlt,Conn,1,1
						do while not Rst.Eof
					%>
						<li><a href="program.asp?ClassID=<%=Rst("ID")%>"><%=Rst("NavTitle")%></a></li>
	              	<%
						Rst.MoveNext
						loop
						Rst.Close:Set Rst=Nothing
					%>
		            </ul>
		            </div>
		            <%
						Rs.MoveNext
						loop
						Rs.Close:Set Rs=Nothing
					%>
			</div>
		</div>
	</div>
	<!--#include file="footer.asp"-->
	<div id="loginbox">
	<div class="t"><b></b><span id="btnClose1">关闭</span></div>
	<div class="wrapper">
	</div>
	</div>
</body>
<!--#include file="bottomjs.html"-->
<script>
	$(function(){
		$(".video ul li a").on("click", function(){
			var _title = $(this).attr("data-title");
			var _video = $(this).attr("data-video");
			var _html = '<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="600" height="370"><param name="movie" value="flvplayer.swf"><param name="quality" value="high"><param name="allowFullScreen" value="true"><param name="FlashVars" value="vcastr_file=' + _video + '&BufferTime=3&IsAutoPlay=1"><embed src="flvplayer.swf" allowfullscreen="true" flashvars="vcastr_file=' + _video + '&IsAutoPlay=1" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="600" height="370"></embed></object>';
			$("#loginbox b").html(_title);
			ShowMark();
          	showDiv(document.getElementById('loginbox'));
          	$(".wrapper").html(_html);
		})
	  document.getElementById('btnClose1').onclick = function(){
		  HideMark();
		  closeDiv(document.getElementById('loginbox'));
		  $(".wrapper").html("");
	  }
	})
</script>
</html>