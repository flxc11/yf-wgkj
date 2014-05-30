<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->
<%
    ClassID = ReplaceBadChar(Trim(Request("ClassID")))
    if ClassID = "" and IsNumeric(ClassID)=false then
    ClassID=7
    end if
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <%=SiteKeysTitle("公司简介")%>
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
			<a href="index.asp">首页</a><%=GetPageNavPath("User_PageCategory",ClassID)%>
		</div>
	</div>
	<div class="wrap clearfix">
		<div class="news">
		    <div class="cnvp-tab-nav T clearfix">
                <a href="javascript:void(0);" class="index_tabshover">公司简介</a>
                <a href="javascript:void(0);">公司愿景</a>
                <a href="news.asp">公司新闻</a>
            </div>
            <div class="cnvp-tab-panle C1" style="width:998px;">
            	<div class="about">
            		<%=GetPageContent2("SiteExplain",7,"NavContent")%>
            	</div>
            </div>
            <div class="cnvp-tab-panle cnvp-tabs-hide C1" style="width:998px;"><div class="about">
                    <%=GetPageContent2("SiteExplain",8,"NavContent")%>
                </div></div>
		</div>
	</div>
	<!--#include file="footer.asp"-->
</body>
</html>

<!--#include file="bottomjs.html"-->