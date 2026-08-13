$(
    function() {
        $(".img-wrapper").each(function() {
            $(this).wrap("<div class='img-container'></div>")
            let imgSrc = $(this).find("img").attr("src");
            $(this).css('background-image', 'url('+ imgSrc + ')');
        })

        $(".trip-title.collapsed").next(".gallery").hide();

        $(".trip-title").click(function() {
            $(this).toggleClass("collapsed");
            $(this).next(".gallery").slideToggle(300);
        })

        $(".img-container").click(function() {
            let w = $(this).outerWidth()
            let h = $(this).outerHeight()
            let x = $(this).position().left
            let y = $(this).position().top

            $(".active").not($(this)).remove()
            let copy = $(this).clone();
            copy.insertAfter($(this)).height(h).width(w)
                .css({ top: y - 8, left: x - 8 })
                .addClass("active")

            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    copy.addClass("positioned")
                })
            })

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


