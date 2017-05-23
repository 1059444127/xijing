
function Calendar(options){
	var me = this;
	me.element = $(options.element);
	me.startDate = options.startDate;
	me.inteval = options.inteval||7;
	
	me.index=0;
	me.dates = me.getDates();
	me.renderCalendar();
	me.changeStatus();
}

Calendar.prototype.getDates = function(){
	var me=this;
	if(me.inteval%7==0)
		{
	
	var result=[];
	for(var i=0;i<me.inteval;i++)
		{
	
		
		var date=new Date(me.startDate.getTime()+i*24*60*60*1000);
		
		var month=date.getMonth()+1;
		month=month<10?("0"+month):month;
		day=date.getDate();
		day=day<10?("0"+day):day;
		var Nane=["周日","周一","周二","周三","周四","周五","周六"];
		
		var arr={
				date:date.getFullYear()+"-"+(month)+"-"+day,
				dateStr:(month)+"/"+(day),
				weekName:Nane[date.getDay()] 
		};
	
		result.push(arr);
		}
	
	}
	return result;
	
}
Calendar.prototype.renderCalendar = function(){
	var me = this;

	for(var i=0;i<7;i++)
		{
		
		$("<div class='dateDiv'>"+me.dates[i].dateStr+"</div>").insertBefore($(".calendar-container .clear"));
		$(".calendar-container").append("<div class='weekDiv'>"+me.dates[i].weekName+"</div>");
		
		}
	$(".calendar-container").append("<div class='last lastDisable'></div>").append("<div class='next nextDisable'></div>");
	
	
	$(".last").on("click",function(event){
		var target = $(event.target);
		
		if(!target.hasClass("lastImg")){
			return;
		}
		
		me.index--;
		
		me.changeStatus();
		me.renderDay();
	});
	
	$(".next").on("click",function(event){
		var target = $(event.target);
		
		if(!target.hasClass("nextImg")){
			return;
		}
		
		me.index++;
		
		me.changeStatus();
		me.renderDay();
	});
	
}

Calendar.prototype.changeStatus = function(){
	var me = this;
	
	//设定左侧按钮状态
	if(me.index == 0){
		$(".last").removeClass("lastImg");
		
	}else{
		$(".last").addClass("lastImg");
	}
	//设置右侧按钮状态
	var maxPage = this.dates.length/7 - 1;
	
	if(this.index == maxPage){
		$(".next").removeClass("nextImg");
	
	}else{
		$(".next").addClass("nextImg");
	}
	
	me.fire("change", me.getCurrentDays());
}

Calendar.prototype.renderDay = function(){
	var me = this;
	
	var days = $(".calendar-container").find(".dateDiv"),
		weekNames =$(".calendar-container").find(".weekDiv");
	
	for(var i = 0; i < 7; i++){
		$(days[i]).html(me.dates[me.index*7+i].dateStr);
		$(weekNames[i]).html(me.dates[me.index*7+i].weekName);
	}
}

Calendar.prototype.getCurrentDays = function(){
	var me = this;
	
	var result = me.dates.slice(me.index*7, me.index*7+7);
	
	return result;
}

EventUtil.extend(Calendar);

