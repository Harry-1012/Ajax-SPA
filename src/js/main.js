var mainApp = new Vue({
    el: '#app',
    data: {
        active: 0
    },
});

$(".van-tabbar-item").click(function() {
    var code = $(".van-tabbar-item--active").attr("data-code");
    code = code ? code : 'index';
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
});

$(".van-tabbar-item").eq(0).trigger("click");