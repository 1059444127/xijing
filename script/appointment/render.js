define(['datasource','text!dept_list'],function(dataSource,dept_list_temp){
	var renderService = {};
	
	renderService.init = function(){
		

		$(".short-desc").readmore({
			substr_len: 95,
			more_link: '<a class="read-more pad-l-20" href="javascript:void(0);">查看更多>></a>'
		});
		//tab页点击事件
		$("ul.tab").on("click", '.item', function(event){
			var target = $(event.target);
			if(target.hasClass("tab-desc")){
				renderService.onTabChange("tab-desc");
			}else{
				renderService.onTabChange("tab-dept-list");
			}
		})
		
		//查看更多的点击事件
		$(".short-desc .read-more").on("click",function(){
			renderService.onTabChange("tab-desc");
		});
		}


		//hover
		$("ul.tab").on("mouseover",'.item', function(event){

			var event=event||window.event;
			
			var target=$(event.target);
			if(target.hasClass("tab-desc"))
			{
			$(".desc").removeClass("hidden");
			//$("ul.tab .tab-desc").addClass("active");
			$(".dept-list").addClass("hidden");
			//$("ul.tab .tab-dept-list").removeClass("active");
			
			}
			else{
			$(".dept-list").removeClass("hidden");
			//$("ul.tab .tab-desc").removeClass("active");
			$(".desc").addClass("hidden");
			//$("ul.tab .tab-dept-list").addClass("active");
			
			}

			var line=$(".tag_line");

			var position=target.position();
			line.animate({
				left:position.left
			},100);


		})







		renderService.onTabChange = function(code){
		if(code == "tab-desc"){
			$(".desc").removeClass("hidden");
			$("ul.tab .tab-desc").addClass("active");
			$(".dept-list").addClass("hidden");
			$("ul.tab .tab-dept-list").removeClass("active");
			
		}else{
			$(".dept-list").removeClass("hidden");
			$("ul.tab .tab-desc").removeClass("active");
			$(".desc").addClass("hidden");
			$("ul.tab .tab-dept-list").addClass("active");
		}
	}



	
		var listTest=dataSource.getDepts();
		var dom = Mustache.render(dept_list_temp,{datas: listTest,depts:listTest.depts});

		$(".dept-list").append(dom);
	
	return renderService;
})