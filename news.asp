<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
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
			首页  /  产品  /  平台产品  /  SiteServer WCM 内容协作平台
		</div>
	</div>
	<div class="wrap clearfix">
		<div class="news">
		    <div class="cnvp-tab-nav T clearfix">
                <a href="javascript:void(0);">公司简介</a>
                <a href="javascript:void(0);">公司愿景</a>
                <a href="javascript:void(0);" class="index_tabshover">公司新闻</a>
            </div>
            <div class="cnvp-tab-panle cnvp-tabs-hide C1" style="width:998px;">
            <div class="about">
                    <%=GetPageContent2("SiteExplain",7,"NavContent")%>
                </div>
            </div>
            <div class="cnvp-tab-panle cnvp-tabs-hide C1" style="width:998px;">
                <div class="about">
                    <%=GetPageContent2("SiteExplain",8,"NavContent")%>
                </div>
            </div>
            <div class="cnvp-tab-panle C1">
            	<div class="news-list">
                    <%
                        Set Rs=Server.CreateObject("Adodb.RecordSet")
                        Sql = "Select * From newsinfo Where ClassID=14 order by NewsOrder desc"
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
            		<dl>
            			<dt><span><%=GetPostTime(Rs("ID"),"newsinfo")%></span><a href="shownews.asp?ID=<%=Rs("ID")%>" target="_blank"><%=Rs("NewsTitle")%></a></dt>
            			<dd><%=Rs("Newssummary")%><span><a href="shownews.asp?ID=<%=Rs("ID")%>" target="_blank">查看全文</a></span></dd>
            		</dl>
            		<%
                        i=i+1
                        Rs.MoveNext
                        Loop
                    %>
                    <div class="NewsPage"><%=GetPage1("Where ClassID=14","newsinfo",5,0)%></div>
            	</div>
            </div>
		</div>
	</div>
	<!--#include file="footer.asp"-->
</body>
</html>

<!--#include file="bottomjs.html"-->