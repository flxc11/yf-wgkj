
function unitFilter(time) { 
	var unit = time.match(/\D+/);   
	var n = parseInt(time);
	if (unit == "s") {  
		return n*1000;
	}
	else {
		return n;
	}
}
function initialize(){
	var _pose0=document.getElementById("pose0");
	var _pose1=document.getElementById("pose1");
	var _pose2=document.getElementById("pose2");
	var _pose3=document.getElementById("pose3");
	var _topic0=document.getElementById("topic0");
	var _topic1=document.getElementById("topic1");
	var _topic2=document.getElementById("topic2");
	var _topic3=document.getElementById("topic3");
	_pose0.className ="picture_out";
	_pose0.style.visibility="visible";  
	_topic0.className="topic_down";
	_pose1.className="picture_out";
	_pose1.style.visibility="visible";
	_topic1.className="topic_down";
	_pose2.className="picture_out";
	_pose2.style.visibility="visible";
	_topic2.className="topic_down";
}   
function makeAnimation(timeline, index) {
	var index = index || 0;
	var delay = unitFilter(timeline[index].timepoint);
	if (index != 0) {   
		t = unitFilter(timeline[index - 1].timepoint);  
		if (delay > t) {        
			delay = delay - t;  
		}
		else throw new Error("timepoint error!");
	}   
	window.setTimeout(function() {  
			timeline[index].fc(); //执行关键帧动画     
			if (timeline[index + 1]) {
			makeAnimation(timeline, index + 1);
			}
			}, delay);
}
function AnimationCase(p,t,i){ 
	makeAnimation([
			{
timepoint: 0+6000*i+"ms",
fc: function() {            
p.className="picture_in";
}   
},
{       
timepoint:500+6000*i+"ms",
fc:function(){
t.className="topic_up";
}
},
{       
timepoint:5500+6000*i+"ms",
fc:function(){
t.className="topic_down";
}
},
{
timepoint:6000+6000*i+"ms",
		  fc:function(){
			  p.className="picture_out";
		  }
},
{
timepoint:6500+6000*i+"ms",
		  fc:function(){
			  p.style.visibility="hidden";
		  }
}
])
}
function StartAnimation(){
	for(var i=0;i<3;i++){
		AnimationCase(document.getElementById("pose"+i),document.getElementById("topic"+i),i);
	}
	initialize();
}
