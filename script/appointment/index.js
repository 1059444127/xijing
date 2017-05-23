
requirejs.config({
	baseUrl:'/xijing/',
	
	paths:{
		render:"script/appointment/render",
		text:"script/lib/requirejs/text",
		datasource:"script/appointment/datasource",
		dept_list:"pages/template/dept_list.html"
	}
});

require(['render','datasource'],function(renderService,dataSource){
	
	renderService.init();

	
});

