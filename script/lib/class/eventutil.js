(function(){
	var EventUtil={
			initEvent:function(){
				if(!this.eventMap)
					{
					this.eventMap={};
					
					}
				this.eventIndex=1;
			},
			
			on:function(ename,fn){
				var me=this;
				me.initEvent();
				
				var cache=me.eventMap[ename];
				if(!cache)
				{
					cache=me.eventMap[ename]=[];
				}
				var eventId=me.eventIndex;
				cache.push({
					eventId:eventId,
					fn:fn
				});
				me.eventIndex++;
				return eventId;
			},
			
			fire:function(ename){
				var me=this;
				me.initEvent();
				var cache=me.eventMap[ename];
				if(!cache){
					return;
				}
				var args = Array.prototype.slice.call(arguments, 1);
				
				for(var i=0;i<cache.length;i++)
					{
					cache[i].fn.apply(me,args);
					}
				
			},
			
			extend:function(fn){
				for(var p in EventUtil){
					fn.prototype[p]=EventUtil[p];
				}
			}
			
	}
	window.EventUtil=EventUtil;
})();