/*
Theme Name: slowlearners
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

/*
$(window).scroll(function(e){
	var scroll_top = $(window).scrollTop();
	var event_top = $('#s20220530a7e1bcbe42c68').offset().top - 10;
	var result_top = $('#s202205307577598ce6b6d').offset().top - 10;
	if (scroll_top > event_top && scroll_top <= result_top) {
		$('.campaign-menu li.l1').addClass('active')
		$('.campaign-menu li.l2').removeClass('active')
	}else if(scroll_top > result_top) {
		$('.campaign-menu li.l1').removeClass('active')
		$('.campaign-menu li.l2').addClass('active')
	}else{
		$('.campaign-menu li.l1').removeClass('active')
		$('.campaign-menu li.l2').removeClass('active')
	}
	didScroll = true;
  });
  */
$(document).ready(function() {

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


	$('.campaign-carousel .slider').slick({
		dots: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true
	});

  	/* 메가 메뉴 호버 효과 */
	  $('.mega_dropdown .title_menu').on("mouseenter",function() {
		var index = $( ".mega_dropdown .title_menu" ).index( this );
        $(this).addClass('active');
        $('header .navbar-nav li.dropdown:nth-child(' + index + ')').addClass('active');
    });
    $('.mega_dropdown .title_menu').on("mouseleave",function() {
		var index = $( ".mega_dropdown .title_menu" ).index( this );
        $(this).removeClass('active');
        $('header .navbar-nav li.dropdown:nth-child(' + index + ')').removeClass('active');
    });
});

//PC버젼 초기화
function init_pc(){

}

//모바일 버젼 초기화
function init_mobile(){

}


function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
