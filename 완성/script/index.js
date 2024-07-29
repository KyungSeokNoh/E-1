$(function(){
    $(".menu>li").hover(function(){
        // $(this).find(".sub").stop().slideDown();
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    }) //

    // $(".menu>li").mouseover(function(){
    //     $(this).children(".sub").stop().slideDown();
    // }) //over

    // $(".menu>li").mouseout(function(){
    //     $(".sub").stop().slideUp();
    // }) // out

    // 이미지 슬라이드

    // var n = 0 ; // 0(left : 0) 1(left : -100%) 2(left : -200%)
    
    // setInterval(function(){
    //     n = (n+1) % 3;

    //     // if(n == 2){
    //     //     n = 0
    //     // }else{
    //     //     // n++;
    //     //     n= n+1;
    //     // }

    //     console.log(n);

    //     $(".left_move").animate({left : n * (-100) + "%"} , 500)


    // }, 2000)

    setInterval(function(){
        $(".left_move").animate({left : "-100%"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({left:"0"})
        })
    },2000)

    $(function(){
        $(".p_click").click(function(){
            $(".modal , .pop").show();
        })
        $(".close").click(function(){
            $(".modal , .pop").hide();
        })


    })




})//jquery