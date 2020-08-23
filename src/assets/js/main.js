;
"use strict";

function DOMready() {

    // Глобальные настройки
    var globParam = (function () {
        var sizes = {
            DESKTOP: "1280",
            LAPTOP: "991",
            TABLETS: "768",
            PHONES: "575"
        };

        return {
            getMediaSize: function () {
                return sizes;
            },
            windowWidth: function () {
                return $(window).width();
            }
        }

    })();

    $("[data-reviews-ya-wrap]").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        // autoplay: true,
        infinite: true,
        useTransform: false,
        autoplaySpeed: 10000,
        // centerMode: true,
        variableWidth: true,

        responsive: [
            {
                breakpoint: globParam.getMediaSize().PHONES,
                settings: {
                    variableWidth: false,
                }
            },
        ]
    });


    var strDescLengthForCut =  193;
    $("[data-reviews-ya-desc]").each(function (indx, item) {
        var $item = $(item);
        var text = $item.text();
        if(text.length > strDescLengthForCut) {
            var wrap = $item.closest("[data-reviews-ya-desc-wrap]");
            $item.data("reviews-ya-desc", text) ;
            var newText = text.slice(0, strDescLengthForCut );
            $item.text(newText + "...");
            wrap.find("[data-btn-show-all]").removeClass("hide");
        }

    });

    $("[data-btn-show-all]").on("click", function () {
        var $this = $(this);
        var desc = $this.closest("[data-reviews-ya-desc-wrap]").find("[data-reviews-ya-desc]");
        var text = desc.text();
        var descData = desc.data("reviews-ya-desc");
        var btnData = $this.data("btn-show-all");
        var btnText = $this.text();
        $this.text(btnData);
        $this.data("btn-show-all", btnText);
        desc.text(descData);
        desc.data("reviews-ya-desc", text);
    });

    $("[data-main-menu-item]").mouseenter(function () {
        var $this = $(this);
        var id = $this.data("main-menu-item");
        var wrap = $this.closest("[data-main-menu-wrap]");
        var items = wrap.find("[data-main-menu-submenu-item]");
        items.removeClass("active");
        wrap.find("#" + id).addClass("active");
        console.log( wrap.find("#" + id));


    });





}

document.addEventListener("DOMContentLoaded", DOMready);