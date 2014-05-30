<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->
<%
	ClassID=ReplaceBadChar(Trim(Request("ClassID")))

	if ClassID="" or IsNumEric(ClassID)=false then
		Set Rs1=Server.CreateObject("Adodb.RecordSet")
		Sql1 = "select top 1 * from User_PageCategory where User_NavParent=2 order by ID asc"
		Rs1.Open Sql1,Conn,1,1
		ClassID = Rs1("ID")
	else
		ClassID = ClassID
	end if

%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<%=SiteKeysTitle("产品介绍")%>
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
			<a href="/index.asp">首页</a><%=GetPageNavPath("User_PageCategory",ClassID)%>
		</div>
	</div>
	<div class="wrap clearfix">
		<div class="wrap-r">
			<div class="pro-ban"><img src="images/imgpro01.jpg" alt=""></div>
			<div class="third-nav">
				<div class="cnvp-tab-nav T clearfix">
					<%
						Set Rs=Server.CreateObject("Adodb.RecordSet")
						Sql="select * from SiteExplain where ClassID='"&ClassID&"' order by ID asc"
						Rs.Open Sql,Conn,1,1
						do while not Rs.Eof
					%>
	                <a href="javascript:void(0);"><%=Rs("NavTitle")%></a>
	                <%
	                	Rs.MoveNext
	                	Loop
	                	Rs.Close:Set Rs=Nothing
	                %>
	            </div>
	            <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql="select * from SiteExplain where ClassID='"&ClassID&"' order by ID asc"
					Rs.Open Sql,Conn,1,1
					do while not Rs.Eof
				%>
                <div class="cnvp-tab-panle cnvp-tabs-hide C"><%=Rs("NavContent")%></div>
                <%
                	Rs.MoveNext
                	Loop
                	Rs.Close:Set Rs=Nothing
                %>
			</div>
		</div>
		<div class="wrap-l">
			<div class="column">
				<h2 class="h2">产品介绍<em>Products</em></h2>

				<%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from User_PageCategory where User_NavParent=1 order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  
	            <div class="ny-subnav">
	              <h2><%=Rs("User_NavTitle")%></h2>
	              	<ul>
	              	<%
						Set Rst=Server.CreateObject("Adodb.RecordSet")
						Sqlt = "Select * from User_PageCategory where User_NavParent="&Rs("ID")&" order by id asc"
						Rst.open Sqlt,Conn,1,1
						do while not Rst.Eof
					%>
						<li><a href="product.asp?ClassID=<%=Rst("ID")%>"><%=Rst("User_NavTitle")%></a></li>
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
<script>
	$(function(){
		$(".cnvp-tab-nav a").first().addClass("index_tabshover");
		$(".cnvp-tab-panle").first().removeClass("cnvp-tabs-hide");
	})
</script>