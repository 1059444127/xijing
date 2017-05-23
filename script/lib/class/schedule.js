function Schedule(options){
	var sch=this;
	sch.selector=$(options.element);
	sch.doctors=options.doctors;
	sch.schedule=sch.doctors.schedule;
	
	sch.createEle();
	sch.Hover();
}
Schedule.prototype.createEle=function(){
	var sch=this;
	sch.pm=$("<ul class='pm'></ul>");
	sch.am=$("<ul class='am'></ul>");
	sch.selector.append(sch.am).append(sch.pm);

	for(var i=0;i<7;i++)
		{
		$(sch.selector.find("ul.am")).append("<li class='schedule-disable'></li>");
		$(sch.selector.find("ul.pm")).append("<li class='schedule-disable'></li>");
		}
	$("<span>上午</span>").insertBefore($(sch.selector.find("ul.am")));
	$("<span>下午</span>").insertBefore($(sch.selector.find("ul.pm")));
}
Schedule.prototype.updateSchedule=function(dates){
	var sch=this;
	sch.am.find("li.schedule-disable").removeClass("schedule-enable");
	sch.pm.find("li.schedule-disable").removeClass("schedule-enable schedule-booked schedule-out-service");
	
	for(var i=0;i<sch.schedule.length;i++)
		{
		var dateStr = dates[i].dateStr;
		
		for(var j=0; j<sch.schedule.length;j++){
			var sd =sch.schedule[j].date.substring(5, 10);
			var type = sch.schedule[j].type;
			var status = sch.schedule[j].status;
			var fee=sch.schedule[j].fee;
			if(sd == dateStr){
				var li = sch.am.find("li.schedule-disable")[i];
				if(type == "下午"){
					li = sch.pm.find("li.schedule-disable")[i];
				}
				
				var cls = "";
				if(status == 1){
					cls = "schedule-enable";
				}else if(status == 2){
					cls = "schedule-booked";
				}else if(status == 3){
					cls = "schedule-out-service";
				}
				
				$(li).addClass(cls).attr("fee",fee);
			}
		}
		
		}
	
	
	
}

Schedule.prototype.Hover=function(){
	var sch=this;
	
	$("ul").on("mouseover mouseout","li.schedule-disable",function(event){
		
		var target=$(event.target);
		var fee="挂号费：￥"+target.attr("fee");
		
		sch.hoverEle=$("<div class='money'>"+fee+"</div>");
		if(event.type=="mouseover"&&target.hasClass("schedule-enable"))
		{
			target.append(sch.hoverEle);
			$(target.find("div.money")).css({
				display:'block'
			})
		}
		else{
			$(target.find("div.money")).css({
				display:'none'
			})
		}
		
	
	});

}

Schedule.prototype.doctor=function(option){
	var sch=this;
	var selector=$(option);
	var name =sch.doctors.name,
	 level=sch.doctors.level,
	
	 sex=sch.doctors.sex;
	
	if(sch.doctors.desc==null)
		{
		var desc="暂无特长信息";
		}
	else{
		var desc=sch.doctors.desc;
	}
	
	selector.append("<div class='pic'></div>").append("<div class='des'></div>");
	if(sex=="F")
		{
		$(selector.find("div.pic")).addClass('woman');
		}
	else{
		$(selector.find("div.pic")).addClass('man');
	}
	$(selector.find("div.des")).append("<h3>"+name+"</h3>").append("<span>"+level+"</span>").append("<p>"+desc+"</p>")
}
