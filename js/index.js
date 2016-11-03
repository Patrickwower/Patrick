/**
 * Created by lxrenta18 on 16/11/2.
 */
(function ($, d, w) {

    $('.fallback-message').hide();

    w.addEventListener('impress:stepenter', function (event) {
        for (var i= 0, a = d.querySelectorAll('.step.leaving'), l = a.length; i < l; i++) {
            a[i].classList.remove('leaving');
        }
        if (event.target.id === 'overview') {
            d.getElementById('impress').classList.add('overview');
        } else {
            d.getElementById('impress').classList.remove('overview');
        }
    });
    w.addEventListener('impress:stepleave', function (event) {
        event.target.classList.add('leaving');
    });

    var impressElement = impress();
    impressElement.init();

    $('.guide').on('click',function(){
        impressElement.next();
    });

})(jQuery, document, window);

$(document).ready(function(){

    var impressElement = impress();
    $("nav ul li").bind("click",function(){
        $(this).addClass("chosen").siblings().removeClass("chosen");
    });
    $("nav ul li.index_1").bind("click",function(){
        impressElement.goto(0);
    });
    $("nav ul li.index_2").bind("click",function(){
        impressElement.goto(2);
    });
    $("nav ul li.index_3").bind("click",function(){
        impressElement.goto(4);
    });
    $("nav ul li.index_4").bind("click",function(){
        impressElement.goto(6);
    });
    $("nav ul li.index_5").bind("click",function(){
        impressElement.goto(7);
    });
    $("nav ul li.index_6").bind("click",function(){
        impressElement.goto(9);
    });
    $("nav ul li.index_7").bind("click",function(){
        impressElement.goto(11);
    });


    $("#index5 .guide").bind("click",function(){
        $("nav ul li.index_4").addClass("chosen").siblings().removeClass("chosen");
    });

    $("#un_7 .guide").bind("click",function(){
        $("nav ul li.index_5").addClass("chosen").siblings().removeClass("chosen");
    })

    $("#un_2 .guide").bind("click",function(){
        $("nav ul li.index_2").addClass("chosen").siblings().removeClass("chosen");
    })
    $("#un_4 .guide").bind("click",function(){
        $("nav ul li.index_3").addClass("chosen").siblings().removeClass("chosen");
    })
    $("#un_9 .guide").bind("click",function(){
        $("nav ul li.index_6").addClass("chosen").siblings().removeClass("chosen");
    })
    $("#un_11 .guide").bind("click",function(){
        $("nav ul li.index_7").addClass("chosen").siblings().removeClass("chosen");
    });


});
