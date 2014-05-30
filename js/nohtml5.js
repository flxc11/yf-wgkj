
function step (el){
	var opacity = 100;
	var h = window.setInterval(function() {
			if (opacity >= 0) {
			el.style.filter = "alpha(opacity=" + opacity +  ")";
			opacity -= 5;
			}
			else {
			window.clearInterval(h);
			}
			}, 50);
}
function allstep(){
	var _p0=document.getElementById("p0");
	var _p1=document.getElementById("p1");
	var _p2=document.getElementById("p2");
	_p0.style.filter ="alpha(opacity=100)";
	_p1.style.filter ="alpha(opacity=100)";
	_p2.style.filter ="alpha(opacity=100)";
	window.setTimeout(function(){
			step(_p0);
			},5000)
	window.setTimeout(function(){
			step(_p1);
			},11000)
	window.setTimeout(function(){
			step(_p2);
			},17000)
//	window.setTimeout(function(){
//			step(_p3);
//			},23000)
}
function bannerIE (){
	allstep();
	window.setInterval(function(){
			allstep();
			},19000)
}

