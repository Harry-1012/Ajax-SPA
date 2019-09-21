$(function() {
    var code = $(".menu-list .selected").attr("data-code");
    var selectedLi = $(".menu-list .selected");
    selectedLi.css({
        background: "#16171c",
        color: "#ecedf1"
    });
    selectedLi.find("img").attr("src", "src/res/img/" + code + "1.png");
    $.ajax({
        url: 'src/view/' + code + ".html",
        type: "get",
        data: {
            code: code
        },
        dataType: "html",
        success: function(data) {
            $(".content").html(data)
        }
    });
    $(".menu-list li").click(function() {
        if ($(this).hasClass("selected") == false) {
            $(this).addClass("selected").css({
                background: "#16171c",
                color: "#ecedf1"
            }).siblings().removeClass("selected").css({
                background: "#202028",
                color: "#71747b"
            });
            var code = $(this).attr("data-code");
            $(".menu-list li").each(function() {
                $(this).find("img").attr("src", "src/res/img/" + $(this).attr("data-code") + ".png");
            });
            $(this).find("img").attr("src", "src/res/img/" + $(this).attr("data-icon") + ".png");

            $.ajax({
                url: 'src/view/'+code + ".html",
                type: "get",
                dataType: "html",
                success: function(data) {
                    $(".content").html(data);
                }
            })
        }
    });
});