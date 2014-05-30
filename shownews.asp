<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->
<%
	ID=ReplaceBadChar(Trim(Request("ID")))

	if ID="" or IsNumEric(ID)=false then
		Response.Write("<script>alert('参数错误')</script>")
		Response.end
	else
		ClassID = GetClassID(ID,"newsinfo")
	end if

%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<%=SiteKeysTitle("公司新闻")%>
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
	            <div class="cnvp-tab-panle C program">
	            	<%
						Set Rsaa=Server.CreateObject("Adodb.RecordSet")
						Sqlaa = "Select * From newsinfo where ID="&ID&""
						Rsaa.Open Sqlaa,Conn,1,1
						if not (Rsaa.Eof or Rsaa.Bof) then
					%>
	            	<div style="whdth:90%; overflow:hidden; margin:0 auto;">
                    <h1 style="width:100%;color: #004ea2; font-size: 18px; text-align:center; font-family: arial;"><%=Rsaa("newstitle")%></h1>
                                        <div><%=Rsaa("newsContent")%></div>
                    </div>
                    <%
						end if
						Rsaa.Close:Set Rsaa=Nothing
					%>
	            </div>
			</div>
		</div>
		<div class="wrap-l">
			<div class="column">
				<h2 class="h2">公司新闻<em>Company News</em></h2>
			</div>
		</div>
	</div>
	<!--#include file="footer.asp"-->
</body>
</html>

<!--#include file="bottomjs.html"-->