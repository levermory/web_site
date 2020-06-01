const $body = $("body");
const $header = $(".page-header");
const scrollClass = "scroll";

$(window).on("scroll", () => {
    const scrollY = $(this).scrollTop();
    scrollY > 0
        ? $body.addClass(scrollClass)
        : $body.removeClass(scrollClass);
});

$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 71
    }, 600);
});

$(window).on('load resize',()=>{
    const video_width = $('.intro_video').width();
        $('.intro_video').css({'height': video_width*9/16});
});


$("button").click(function(){
    $("#results").empty();
    let search = $("#search").val();
    let request = "https://www.songsterr.com/a/ra/songs.json?pattern=" + search;
    $.getJSON(request, function(result){
        if (result.length === 0){
            $("#results").text('Нет результата по вашему запросу');
        }
        else {
            result.forEach(function(item){
            let new_link = "http://www.songsterr.com/a/wa/song?id=" + item.id;
            let link_name = item.title + " - " + item.artist.name;
            $("#results").append('<a href=' + new_link + '>' + link_name +'<a>'+'<br>');
        });
        }
    });
});