
requirejs.config({
	baseUrl:'/xijing',
	
	paths:{
		render:"script/home/render",
		text:"script/lib/requirejs/text",
		datasource:"script/home/datasource",
		pro_sort:"pages/template/pro_sort.html",
		news:"pages/template/news.html"
	}
});

require(['render','datasource'],function(renderService,dataSource){
	
	renderService.init();
	
	
});