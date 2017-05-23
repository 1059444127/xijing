function Readmore(option){
	var rea=this;
	rea.selector=$(option.element);
	rea.desc=option.desc;
	rea.init();
}
Readmore.prototype.init=function(){
	var rea=this;
	
	rea.selector.append("<p>"+rea.desc.substr(0,200)+
			"<a href='#' rel='external nofollow' class='open'>"+" ... 展开>>"+"</a>"
			+"</p>");
	
	
	rea.selector.append("<div class='content'>"+
			"<p>"+rea.desc+"</p>"+
			"<div class='btm'><a href='#' rel='external' class='btn'>收起全文</a></div>"+
			"</div>");
	rea.open=$(rea.selector.find("a.open"));
	rea.btn=$(rea.selector.find("a.btn"));
	rea.open.on("click",function(){
		rea.showDiv();
	})
	rea.btn.on("click",function(){
		rea.hideDiv();
	})
}
//显示方法
Readmore.prototype.showDiv=function(){
	var rea=this;
	 var x=rea.open.parent();
	 var y=x.next();
	  x.css({
		  display:'none'
	  });
	  y.css({
		  display:'block'
	  });
}
//隐藏方法
Readmore.prototype.hideDiv=function(){

	var rea=this;
	 var x=rea.btn.parent().parent();
	 var y=x.prev();
	  x.css({
		  display:'none'
	  });
	  y.css({
		  display:'block'
	  });
}



 