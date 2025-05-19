$(function () {
    skrollr.init()
    window.scrollTo(0, 0);
    
    $('html, body').css('overflow', 'hidden');
    setTimeout(function () {
        $('html, body').css('overflow', 'auto');
    }, 3900);

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    $(".work-item").each(function () {
        var video = $(this).find("video").get(0);
        $(this).on("mouseenter", function () {
            video.play();
        });
        $(this).on("mouseleave", function () {
            video.pause();
            video.currentTime = 0;
        });
    });
    $('.work-gallery .work-item').each(function (index, el) {

        $(el).click(function () {
            const title = $(this).find('.caption').text()
            const text = $(this).find('.expl').text()
            const videoSrc = $(this).find('video').attr('src')

            $('.popup').find('h4').text(title)
            $('.popup').find('p').text(text)
            $('.popup').find('video').attr('src', videoSrc)

            $('.popup').addClass('on')
            $('.popup').find('video')[0].play()
        })
    })
    $('.popup button').click(function () {
        $('.popup').removeClass('on')
        $('.popup').find('video')[0].pause()
    })
});