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
        "https://t.me/emma770055",
        "https://t.me/eemma556543",
        "https://t.me/emma88765",
        "https://t.me/Aliyah88990",
        "https://t.me/Aliya66547",
        "https://t.me/Aliyah0099",
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
        "https：//wa.me/8562051670705",
        "https：//wa.me/66946901394",
        "https：//wa.me/8562093356297",
        "https：//wa.me/8562059879524",
        "https：//wa.me/8562095501365",
        "https：//wa.me/8562052488671",
        "https：//wa.me/8562052479404",
        "https：//wa.me/8562093309282",
        "https：//wa.me/8562051759802"
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