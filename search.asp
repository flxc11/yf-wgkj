<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<%=SiteKeysTitle("站内检索")%>
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
			<a href="/index.asp">首页</a>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;站内检索
		</div>
	</div>
	<div class="wrap clearfix">
		<div class="wrap-r">
			<div class="third-nav" style="margin: 0;">
				<div class="cnvp-tab-nav T clearfix">
	                <a href="javascript:void(0);" class="index_tabshover">站内检索</a>
	            </div>
	            <div class="cnvp-tab-panle C program">
	            	<%
						Keyword=Request("Keyword")
						Set Rs=Server.CreateObject("Adodb.RecordSet")
						Sql = "Select * From newsinfo Where newstitle like '%"&Keyword&"%' order by newsorder desc"
						Rs.Open Sql,Conn,1,1
						Dim Page
						Page=Request("Page")                            
						PageSize = 12                                    
						Rs.PageSize = PageSize               
						Total=Rs.RecordCount               
						PGNum=Rs.PageCount               
						If Page="" Or clng(Page)<1 Then Page=1               
						If Clng(Page) > PGNum Then Page=PGNum               
						If PGNum>0 Then Rs.AbsolutePage=Page                         
						i=0
						Do While Not Rs.Eof And i<Rs.PageSize
					%>
					<dl>
						<dt><span><a href="showcase.asp?ID=<%=Rs("ID")%>" target="_blank">进入</a></span><%=GetNewsTitle(Rs("ID"),20)%></dt>
						<dd class="pic"><img src="images/imgp4.jpg" alt=""></dd>
						<dd class="txt"><%=left(Rs("NewsSummary"),125)&"..."%></dd>
					</dl>
					<%
						i=i+1
						Rs.MoveNext
						Loop
					%>
					<div class="NewsPage"><%=GetPage1("Where newstitle like '%"&Keyword&"%'","newsinfo",5,0)%></div>
	            </div>
			</div>
		</div>
		<div class="wrap-l">
			<div class="column">
				<h2 class="h2">成功案例<em>Success Case</em></h2>

				<%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from newsclass where NavParent=4 order by id asc"
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
</body>
</html>

<!--#include file="bottomjs.html"-->