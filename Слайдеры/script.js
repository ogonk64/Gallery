
var navBtnId = 0;//Индекс кнопки навигации маленькой
var slideInterval = 2000;
var translateWidth = 0;
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;


function nextSlide() {

    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    $('#next-btn, #prev-btn').css('background', '#fff')
}


function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }

}
$(function () {
    var switchInterval = setInterval(nextSlide, slideInterval);
    $('#viewport').hover(function () {
        clearInterval(switchInterval);
        $('#prev-btn, #next-btn').css('display', 'block');
    }, function () {
        switchInterval = setInterval(nextSlide, slideInterval);
        $('#prev-btn, #next-btn').css('display', 'none');
    });
    $('#next-btn').click(function () {
        if (slideCount !== slideNow) {
            nextSlide();
            $('#prev-btn').css('background', '#fff')
        } else {
            $(this).attr('disabled', true).css('background', 'red')
        }


    });

    $('#prev-btn').click(function () {
        if (slideNow <= 1) {
            $(this).attr('disabled', true).css('background', 'red')
        } else {
            prevSlide();
            $('#next-btn').css('background', '#fff')
        }
    });
    $('.slide-nav-btn').click(function () {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
        $('#next-btn').css('background', '#fff');
        $('#prev-btn').css('background', '#fff');
    });
}); 
