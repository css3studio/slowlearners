/*
Theme Name: earthecok
Author: css3studio
Version:1.0
*/

var device_status = "";
$(window).resize(function() {
	var dw = viewport().width;
	if(dw <= 768 && device_status == "pc"){	//PC에서 모바일로 변경시
		$("body").removeClass('pc');
		$("body").addClass('mobile');
		init_mobile();
		device_status = "mobile";
	}else if(dw > 768 && device_status == "mobile"){	//모바일에서 PC로 변경시
		$("body").removeClass('mobile');
		$("body").addClass('pc');
		init_pc();
		device_status = "pc";
	}
});

$(document).ready(function() {

	//Contact 클래스명 지정
	$("footer").prev().addClass("section-contact");

	//Notice 게시판 구조변경
	$('#post_card_b20220321cc961bd599dd1 ul.list').each(function(){
		var time = $('i').text($('li.time',this).text());
		$('li.time a span:first-of-type',this).before(time);
		$('li.time',this).remove();
	})



/*
    //메인 홈 > 지점 소개 및 예약
	var branches = {
		"사당" : "#s202102155aa89ede2ed9a",
		"선릉" : "#s202102174f98591002401",
		"수원역" : "#s20210218b328c8f043424",
		"청주상당" : "#s202102184128416a16fd8",
		"인덕원" : "#s202102182ae4bbdb11a68",
		"합정" : "#s2021021861818badf2940",
		"가산디지털단지역" : "#s20210218cb3a3231852aa",
		"마곡" : "#s202102183367b249b0b9b",
		"여의도" : "#s2021021885dec74fb36fd"
	};

	var map_data_area = $('<div class="map-data-area"/>');
	$('#s20210215159c93c980d75').after(map_data_area);
	map_data_area.css({
		position : 'relative'
	});

	setTimeout(function(){
		$.each( branches, function( key, value ) {
			map_data_area.append($(value));
			$(value).css({
				position : 'absolute',
				top : 0,
				left : 0,
				width: '100%'
			});
			if(key == "사당")
		  		$(value).css("z-index", "1");
		  	else
		  		$(value).css("z-index", "-1");
		});
	},100);

    $('.ng01 > li > a').bind("click",function(event){
        if($('.ng01').hasClass('openMenu')){
            $('.ng01').removeClass('openMenu')
        }else{
            $('.ng01').addClass('openMenu')
        }
        $(".ng01 > li").removeClass("active");
        $(this).parent().addClass("active");
        var target = $(this).attr('data-id');
		$.each( branches, function( key, value ) {
			if(value == target)
		  		$(value).css("z-index", "1");
		  	else
		  		$(value).css("z-index", "-1");
		});
        return false;
    });
*/
    var dw = viewport().width;
	if(dw <= 768){	//모바일
		$("body").removeClass('pc');
		$("body").addClass('mobile');
		init_mobile();
		device_status = "mobile";
	}else{	//PC
		$("body").removeClass('mobile');
		$("body").addClass('pc');
		init_pc();
		device_status = "pc";
	}

});

//PC버젼 초기화
function init_pc(){
	/*
	if($('.slider-main .slider .slick-list').length > 0){
		$('.slider-main .slider').slick('unslick');
	}*/
}

//모바일 버젼 초기화
function init_mobile(){
	/*
    $('.slider-main .slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  variableWidth: true,
	  draggable: true
    */

}

function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
