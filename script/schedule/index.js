
requirejs.config({
	baseUrl:'/xijing/script/schedule',
	
	paths:{
		render:"render",
		datasource:"datasource"
	}
});

require(['render','datasource'],function(renderService,dataSource){
	
	renderService.init();

	
});

