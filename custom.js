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

	//Notice 게시판 리스트 구조변경
	$('#post_card_b20220321cc961bd599dd1 ul.list').each(function(){
		var time = $('<span/>').text($('li.time',this).text()).addClass('time');
		$('li.tit a span:first-of-type',this).before(time);
		$('li.time',this).remove();
	})
	//Notice 게시판 뷰 구조변경
	$('.board_view .board_summary .author .date').before($('.board_view header p a'));

	//에티켓 탭메뉴 레이어 전환
	var sections = ['#s20220331c93b202b05422','#s2022033123d7fd2520021','#s20220331a893966028ed7','#s202203317eac794233917'];
	$('.tabmenu-etiquette li a').on("click",function(event){
		$('.tabmenu-etiquette li').removeClass("current");
		$(this).parent().addClass("current");
		var idx = $(this).parent().index();
		for(var i in sections) {
			if(idx == i)	$(sections[i]).show();
			else			$(sections[i]).hide();
		}
		event.preventDefault();
	});

	//지구에티켓 링크 탭메뉴 분기
	var a = $('<a>', {
		href: window.location.href
	});
	var path = a.prop('pathname');
	if(path.substr(0,1) == "/")	path = path.substr(1);
	var search = a.prop('search');
	if(search.substr(0,1) == "?")	search = search.substr(1);

	if(path == "etiquette"){
		if(search == "tab=2"){
			$('.tabmenu-etiquette ul li.l2 a').click();
		}
		if(search == "tab=3"){
			$('.tabmenu-etiquette ul li.l3 a').click();
		}
		if(search == "tab=4"){
			$('.tabmenu-etiquette ul li.l4 a').click();
		}
		console.log(path);
		console.log(search);
	}


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

}

//모바일 버젼 초기화
function init_mobile(){

}

function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
