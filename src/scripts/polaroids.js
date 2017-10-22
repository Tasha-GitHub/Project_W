(() => {
    const endTop = 0;
    const endLeft = 450;
    let zIndex= 1;

    const randRotation = (el) => {
        const rotation = Math.round( Math.random() * 90-45);
        return $(el).css({
            '-webkit-transform':'rotate('+rotation+'deg)'
            ,'-moz-transform':'rotate('+rotation+'deg)'
            ,'transform':'rotate('+rotation+'deg)'
        });
    }

    $('.gallery li').each(function() {
        randRotation(this).css({
            top:Math.round(Math.random()*50-25)
            ,left:Math.round(Math.random()*50-25)
            ,'zIndex': zIndex++
        })
        .click(() => {
            const myZindex = $(this).css('zIndex');
            $('.gallery li').not(this).each(function(){
                if( $(this).css('zIndex') > myZindex ){
                    $(this).css('zIndex',$(this).css('zIndex')-1);
                }
            });
            if(!$(this).is('.active')){
                $(this).toggleClass('active')
                .animate({
                    top:endTop
                    ,left:endLeft
                })
                .css({zIndex:$('.gallery li').length });
                const activated=$('.gallery .active').not(this);
                activated.length && activated.click();
            }else{
                $('.gallery li').each(() => {
                    $(this).css('zIndex',parseInt($(this).css('zIndex'),10)+1)
                });
                randRotation($(this).toggleClass('active'))
                .animate({
                    top:Math.round(Math.random()*50-25)
                    ,left:Math.round(Math.random()*50-25)
                }).css({zIndex:1});
            }
        });
    });
})();