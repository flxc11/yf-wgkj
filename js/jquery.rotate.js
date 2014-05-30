(function($){$.fn.rotate=function(t,prev,curr,auto){auto=(typeof(auto)!='undefined')?auto:true;var group=this;return new function(){var time=t;var self=this;var updt=true;var item;var lidx;var index=0;this.root=group;this.update=function(){lidx=index;var last=item;item=$(self.root[index++]);if((index%self.root.length)==0)index=0;if(last!=null)prev(last,self);curr(item,self);}
this.start=function(){if(self.id=='undefined'||self.id==null){self.id=setInterval(self.update,time);if(updt)self.update();}}
this.stop=function(){if(self.id!='undefined'&&self.id!=null){clearInterval(self.id);self.id=null;updt=false;setTimeout(function(){updt=true;},time);}}
this.goto=function(idx){index=idx;self.stop();self.update();self.start();}
this.index=function(){return lidx;}
this.root.parent().hover(function(){self.stop();},function(){self.start();});if(auto&&self.root.length>1)this.start();}}})(jQuery)