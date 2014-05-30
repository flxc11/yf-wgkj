<!--#include file="Config/Conn.asp" -->
<!--#include file="Include/Class_Function.asp" -->
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<%=SiteKeysTitle("首页")%>
	<!--#include file="public.asp"-->
	<link rel="stylesheet" href="css/css.css">
</head>
<body class="inxBody">
  <div class="homepage">
    <div class="header" style="border-bottom: 1px solid #fff;">
		<!--#include file="top.asp"-->
	</div>
    <div class="top-style"></div>
    <div class="top">
      <div class="sy-column">
        <div class="dots">
        </div>
      </div>
    </div>
    <div class="slideshow">
    <%
    	Set Rs=Server.CreateObject("Adodb.RecordSet")
    	sql = "select top 5 * from shopinfo where classid=1 order by ShopOrder desc"
    	rs.open sql,conn,1,1
    	i=1
    	do while not rs.eof and i<6
    %>
	    <div class="slide slide-<%=i%>">
	        <img class="left" src="images/marquee_left.png">
	        <img src="<%=Rs("ShopSPic")%>">
	        <img class="right" src="images/marquee_right.png">
	        <div class="overlay">
	          <h3><%=Rs("ShopName")%></h3> 
	          <div class="info"><%=Rs("ShopContent")%></div>
	          <div class="link">
	            <a href="<%=Rs("ShopFactory")%>" target="_blank">
	              <span>了解更多信息 »</span>
	            </a>
	          </div>
	        </div>
	    </div>
	    <%
	    	i=i+1
	    	rs.MoveNext
	    	loop
	    	rs.close:set rs=nothing
	    %>
    </div>
  </div>
	<div class="topnews">
		<div class="mc1 clearfix">
      <h2>新闻：</h2>
        <div class="mc1_l" id="scrollDiv">
          <ul>
            <%
            	Set Rs = Server.CreateObject("Adodb.RecordSet")
            	Sql = "select top 5 * from NewsInfo where ClassID=14 order by NewsOrder desc"
            	Rs.Open Sql,Conn,1,1
            	i=0
            	do while not Rs.Eof and i<5
            %>
            <li><a href="shownews.asp?ID=<%=Rs("ID")%>" target="_blank" class="mcl_a"><%=Rs("NewsTitle")%></a></li>
            <%
            	i=i+1
            	Rs.MoveNext
            	loop
            	Rs.Close:Set Rs=Nothing
            %>
          </ul>
        </div>
    </div>
	</div>
  <!-- main Start -->
  <div class="mainBg">
    <div class="main">
    
      <div class="mc2">
        <div id="mc2_alrBox1" class="mc2_alrBox mc2_alrBox1">
          <img src="images/proName1.png" width="105" height="41" />
          <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from User_PageCategory where User_NavParent=1 order by id asc"
					Rs.open Sql,Conn,1,1
					do while not Rs.Eof
				%>
	                  
	            <dl>
	              <dt><%=Rs("User_NavTitle")%></dt>
	              <%
					Set Rst=Server.CreateObject("Adodb.RecordSet")
					Sqlt = "Select * from User_PageCategory where User_NavParent="&Rs("ID")&" order by id asc"
					Rst.open Sqlt,Conn,1,1
					do while not Rst.Eof
				%>
	                <dd><a href="product.asp?ClassID=<%=Rst("ID")%>"><%=Rst("User_NavTitle")%></a></dd>
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
        <div id="mc2_alrBoxAliyun" class="mc2_alrBox mc2_alrBox2">
          <img src="images/proName3.png" />

          <%
					Set Rs=Server.CreateObject("Adodb.RecordSet")
					Sql = "Select * from newsclass where NavParent=2 order by id asc"
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
        <div class="mc2_boxList">
          <ul>
            <li showID="mc2_alrBox1"><img src="images/msc1.jpg" /></li>
            <li showID="mc2_alrBoxAliyun">
               <img src="images/msc5.jpg" />
            </li>
            <li><a href="video.asp">
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