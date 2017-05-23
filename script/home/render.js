define(['datasource','text!pro_sort',"text!news"],function(dataSource,pro_sort_temp,news_temp){
	var renderService = {};
	
	renderService.init = function(){
		
		/*var ul=$(".step_conten ul");
		ul.on("mouseover mouseout","li",function(event){
		var event=event||window.event;
		var target=$(event.target);
		var look=target.find(".look"),
			text=target.find("div.text"),
			img = target.find(".img");
			
		var allClassName = img.attr("class");
		
		var imgClsName = allClassName.substr(0,allClassName.indexOf(" "));
			
		if(event.type=="mouseover")
		{
			img.addClass(imgClsName+"_hover");
			if(text.is(":animated")){
					//stop会清空textContainer内部的动画数组列表，然后停止动画
					text.stop().animate({
						"margin-top" : 20
					},150);
				}else{
					text.animate({
						"margin-top" : 20
					},150);
				}
				
				if(look.is(":animated")){
					look.stop().animate({
						"height":"32px",
						"line-height":"32px"
					},150)
				}else{
					look.animate({
						"height":"32px",
						"line-height":"32px"
					},150)
				}
			
		}
		else{
			img.removeClass(imgClsName+"_hover");
			if(text.is(":animated")){
					//stop会清空textContainer内部的动画数组列表，然后停止动画
					text.stop().animate({
						"margin-top" : 60
					},150);
				}else{
					text.animate({
						"margin-top" : 60
					},150);
				}
				
				if(look.is(":animated")){
					look.stop().animate({
						"height":"0px",
						"line-height":"0px"
					},150)
				}else{
					look.animate({
						"height":"0px",
						"line-height":"0px"
					},150)
				}
			
		

		}
		
	})
*/
		




		var DoctorsData=dataSource.getDoctors();
	
		/*if(DoctorsData.length>3)
			DoctorsData=DoctorsData.slice(0,3);*/
		
		for(var i=0;i<DoctorsData.length;i++)
		{
			if(DoctorsData[i].img=='')

			{
				DoctorsData[i].img = function(){
				
				if(this.sex == 'M'){
					return '../resource/images/default-man-doc.png';
					}
				else{
					return '../resource/images/default-woman-doc.png';
					}
				}
			}
		}

	//console.log($("#img1").complete)	
		


		
		for(var i=0;i<DoctorsData.length;i++){
			//doctors[i].sexImg = doctors[i].sex == 'M' ? 'default-man-doc':'default-woman-doc';
			
			DoctorsData[i].default = function(){
				
				if(this.sex == 'M'){
					return 'default-man-doc';
				}
				else{
					return 'default-woman-doc';
				}
			}
			
			DoctorsData[i].level = i+1;
		}
		var DoctorsDom = Mustache.render(pro_sort_temp,{datas: DoctorsData});

		$(".pro_sort ul").append(DoctorsDom);



		//新闻渲染
		
		var newsData=dataSource.getNews();
		
		var main_news_title=newsData[0].title;
		var main_news_conten=newsData[0].content;
		var news_img=newsData[0].img;
		$(".main_news_title").html(main_news_title);
		$(".main_news_conten").html(main_news_conten);


		$(".news_img img").attr("src",news_img);

		newsData=newsData.slice(1);
		var newsDom = Mustache.render(news_temp,{datas: newsData});

		$(".news_list ul").append(newsDom);





}





	
	
	return renderService;
})
