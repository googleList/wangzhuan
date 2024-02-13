(function (a) {
    a(window).scroll(function () {
        var b = a(window).scrollTop();
        if (b >= 50) {
            a(".sticky").addClass("nav-sticky")
        } else {
            a(".sticky").removeClass("nav-sticky")
        }
    });
    a(".nav-item a, .mouse-down a").on("click", function (c) {
        var b = a(this);
        a("html, body").stop().animate({
            scrollTop: a(b.attr("href")).offset().top - 0
        }, 1500, "easeInOutExpo");
        c.preventDefault()
    });
    a("#mySidenav").scrollspy({
        offset: 70
    });

    a("#contact-form").submit(function () {
        var b = a(this).attr("action");
        a("#message").slideUp(750, function () {
            a("#message").hide();
            a("#submit").before("").attr("disabled", "disabled");
            a.post(b, {
                name: a("#name").val(),
                email: a("#email").val(),
                comments: a("#comments").val(),
            }, function (c) {
                document.getElementById("message").innerHTML = c;
                a("#message").slideDown("slow");
                a("#cform img.contact-loader").fadeOut("slow", function () {
                    a(this).remove()
                });
                a("#submit").removeAttr("disabled");
                if (c.match("success") != null) {
                    a("#cform").slideUp("slow")
                }
            })
        });
        return false
    });
}
)(jQuery);

 

$(document).ready(function () {
    var urls = [
        "https://t.me/1", 
    ];

    var currentIndex = 0;
    $("a.url-link").attr("href", urls[currentIndex]);
    $("a.url-link").click(function (e) {
        e.preventDefault();
        window.open(urls[currentIndex], "_blank");
        currentIndex = (currentIndex + 1) % urls.length;
        $(this).attr("href", urls[currentIndex]);
    });
});


$(document).ready(function () {
    var urls = [
        "https：//wa.me/1", 
    ];

    var currentIndex = 0;
    $("a.ws-link").attr("href", urls[currentIndex]);
    $("a.ws-link").click(function (e) {
        e.preventDefault();
        window.open(urls[currentIndex], "_blank");
        currentIndex = (currentIndex + 1) % urls.length;
        $(this).attr("href", urls[currentIndex]);
    });
});
