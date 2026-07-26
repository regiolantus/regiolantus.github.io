$(
    function() {
        $(".img-wrapper").each(function() {
            $(this).wrap("<div class='img-container'></div>")
            let imgSrc = $(this).find("img").attr("src");
            $(this).css('background-image', 'url('+ imgSrc + ')');
        })

        $(".img-container").click(function() {
            let w = $(this).outerWidth()
            let h = $(this).outerHeight()
            let x = $(this).position().left
            let y = $(this).position().top

            $(".active").not($(this)).remove()
            let copy = $(this).clone();
            copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")

            $(".active").css('top', y-8);
            $(".active").css('left', x-8);

            setTimeout(function() {
                copy.addClass("positioned")
            }, 0)

        })
    }
)

$(document).on("click", ".img-container.active", function() {
    let copy = $(this)
    copy.removeClass("positioned active").addClass("postactive")
    setTimeout(function() {
        copy.remove();
    }, 500)
})


