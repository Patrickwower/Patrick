/**
 * Created by lxrenta18 on 16/10/26.
 */
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $("#content").find(".item");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 100) {
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $("#menu").find(".current").attr("href")) {
            $("#menu").find(".current").removeClass("current");
            $("#menu").find("[href=" + currentItem + "]").addClass("current");
        }
    });
});
