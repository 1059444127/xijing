define(['datasource'],function(dataSource){
	var renderService = {};
	
	renderService.init = function(){
		var calendar = new Calendar({
			element :'.calendar-container',
			startDate: new Date(),
			inteval : 14
		});
	
		var schedule1=new Schedule({
			element:".schedule1",
			doctors:dataSource.getDoctors()[0]
		});
		
		schedule1.doctor(".doctor1");
		
		var dates=calendar.getCurrentDays();
		
		schedule1.updateSchedule(dates);
		
		
		
		
		var schedule2=new Schedule({
			element:".schedule2",
			doctors:dataSource.getDoctors()[1]
		});

		schedule2.doctor(".doctor2");
		
		
		schedule2.updateSchedule(dates);
		
		
		var schedule3=new Schedule({
			element:".schedule3",
			doctors:dataSource.getDoctors()[2]
		});

		schedule3.doctor(".doctor3");
		
		
		schedule3.updateSchedule(dates);
		
		calendar.on("change",function(){
			var dates=calendar.getCurrentDays();
			
			schedule1.updateSchedule(dates);
			schedule2.updateSchedule(dates);
			schedule3.updateSchedule(dates);
		})
		
		
		var readmore=new Readmore({
			element:".introduce",
			desc:dataSource.getDeptDesc()
		});
		
		
		
		
	}
	
	return renderService;
})