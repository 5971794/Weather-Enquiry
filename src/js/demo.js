

function creat(demo){
	console.log( 132323233);

var day;
var wea;
var tempMax;
var tempMin;
var fengli;
var fenglistr=[];
var fengxiang;
var myDate =new Date();
var myDate2 =new Date();
var myday2;
var myday =myDate.getDate();
var mymonth2;
var mymonth =myDate.getMonth()+1;
var sunLock = [];
var cloudLock = [];
var json1=[], // 星期几
    json2=[],// 日期
 	json3=[],// 路径
	json4=[],// 晴天雨天
    json5=[];// 温度变化值
var mainJson1, // 主页面首个
	mainJson2=[],// 主页面风
	mainJson3=[];// 主页面日期
var listr='';
var divstr='';
window.onload=function(){
		mainJson1=demo.data.wendu;
		for(var i=0;i<5;i++){
		day=demo.data.forecast[i].date.split('日');
		wea=demo.data.forecast[i].type;
		tempMax = parseInt(demo.data.forecast[i].high.split(' ')[1]);
		tempMin = parseInt(demo.data.forecast[i].low.split(' ')[1]);
		if(myday==day[0]){
			json1[i]="今天";
		}else if(myday==day[0]-1){
			json1[i]="明天";
		}else{
			json1[i]=day[1];
		}

		mayday2 = myDate2.setDate(myday+i);
		mymonth2 = myDate2.getMonth()+1;
		if(mymonth2<10){
			json2[i]='0'+mymonth2+'月'+day[0]+'日';
		}else{
			json2[i]=mymonth2+'月'+day[0]+'日';
		}	

		switch(wea){
			case "多云":json3[i]='url(src/images/1-2.png)';
						sunLock[i]='show';
						cloudLock[i]='show';
							break;
			case "晴" : json3[i]='url(src/images/1-0.png)';
						sunLock[i]='show';
						cloudLock[i]='hide';
							break;
			case "雨" : json3[i]='url(src/images/1-6.png)';
						sunLock[i]='hide';
						cloudLock[i]='hide';
							break;
			case "阵雪" : json3[i]='url(src/images/1-8.png)';
						sunLock[i]='hide';
						cloudLock[i]='hide';
							break;
			case "中雪" : json3[i]='url(src/images/1-7.png)';
						sunLock[i]='hide';
						cloudLock[i]='hide';
							break;
			default :json3[i]='url(src/images/1-2.png)';
					sunLock[i]='hide';
						cloudLock[i]='hide';
		}
		json4[i] =wea;
		json5[i] =tempMin+'~'+tempMax;

		fengli =demo.data.forecast[i].fengli.slice(9,-3);
		fengxiang =demo.data.forecast[i].fengxiang;

		mainJson2[i] = fengxiang +fengli;
		mainJson3[i] =demo.data.forecast[i].date.split('日')[1]+'/'+json2[i];
			listr +='<li>\
					<p>'+json1[i]+'</p>\
					<p>'+json2[i]+'</p>\
					<span ></span>\
					<p>'+json4[i]+'</p>\
					<p>'+json5[i]+'℃</p>\
					</li>';


			if(i== 0){
					divstr +='	<li>\
							<div class="text-left">\
							<span>'+mainJson1+'</span>\
							<p>℃&nbsp&nbsp</p>\
							<p>'+json4[i]+'&nbsp&nbsp</p>\
							<p>'+mainJson2[i]+'</p>\
							<br>\
							<p>&nbsp&nbsp&nbsp&nbsp&nbsp'+json5[i]+'℃</p>\
						</div>\
						<div class="text-right">\
							<p>'+mainJson3[i]+'</p>\
						</div>\
						<div class="sun"></div>\
						<div class="cloud"></div>\
						</li>';
			}else{
					divstr +='	<li>\
							<div class="text-left">\
							<span>'+json5[i]+'</span>\
							<p>℃&nbsp&nbsp</p>\
							<p>'+json4[i]+'&nbsp&nbsp</p>\
							<p>'+mainJson2[i]+'</p>\
							<br>\
							<p></p>\
						</div>\
						<div class="text-right">\
							<p>'+mainJson3[i]+'</p>\
						</div>\
						<div class="sun"></div>\
						<div class="cloud"></div>\
						</li>';

			}
		

		}	
		
		
	   $('.weather').html(listr);
	   $('.bg').html(divstr);

	  $('.weather').on('mouseenter','li',function(e){
	  	var index =$(this).index();
	  	$('.weather li').css({backgroundColor:'#30B3B4'});
	  	$(this).css({backgroundColor:'#45BBBD'})
	  	$('.bg li').hide();
	  	$('.bg li').eq(index).show();
	  })
	   $('.weather').on('mouseleave',function(e){
	   	$('.weather li').css({backgroundColor:'#30B3B4'});
	  	$('.weather li').eq(0).css({backgroundColor:'#45BBBD'})
	  	$('.bg li').hide();
	  	$('.bg li').eq(0).show();
	   })
		for(var j=0 ;j<5 ;j++){
			if(sunLock[j] == 'show'){
				$('.bg li').eq(j).find('.sun').show();
			}else{
				$('.bg li').eq(j).find('.sun').hide();
			}
			if(cloudLock[j] == 'show'){
				$('.bg li').eq(j).find('.cloud').show();
			}else{
				$('.bg li').eq(j).find('.cloud').hide();
			}



			$('.weather span').eq(j).css('background-image',json3[j]);

		}
	
}
	



	}
	