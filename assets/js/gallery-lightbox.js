$(
    function() {
        $(".img-wrapper").each(function() {
            let $wrapper = $(this);
            $wrapper.wrap("<div class='img-container'></div>")
            let $img = $wrapper.find("img");
            let imgSrc = $img.attr("src");
            $wrapper.css('background-image', 'url('+ imgSrc + ')');

            let reveal = function() {
                $wrapper.addClass("loaded");
            };

            if ($img[0].complete) {
                reveal();
            } else {
                $img.one("load", reveal);
            }
        })

        $(".gallery").each(function() {
            $("<div class='gallery-scrim'></div>").prependTo(this);
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
            let caption = $(this).find("img").attr("alt");
            let copy = $(this).clone();
            copy.insertAfter($(this)).height(h).width(w)
                .css({ top: y - 8, left: x - 8 })
                .addClass("active")

            $(this).closest(".gallery").addClass("dimmed");

            if (caption) {
                $("<div class='caption'></div>").text(caption).appendTo(copy);
            }

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
    copy.closest(".gallery").removeClass("dimmed");
    copy.removeClass("positioned active").addClass("postactive")
    setTimeout(function() {
        copy.remove();
    }, 500)
})


