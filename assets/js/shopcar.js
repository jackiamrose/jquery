/**
 * Created by user-pc on 2015/11/23.
 */
/*购物车栏*/
$(function(){
    proShop.init();
});


/*加入购物车按钮*/
var proShop={
    createShop:function(){
        var shop=$('<p class="shop"><span></span><span>购物车</span></p>');
        $('.main-left').append(shop);

    },

    /*加入购物车删除按键*/
    divShop:function(){
        $('.main-right div.div ').bind({
            mouseenter:function(){
                var th=$(this);
                $(this).append($('<p class="shop-in">加入购物车</p>'));
                $('.shop-in').width($(this).width());
                $('.shop-in').click(function(){
                    /*加入购物箱*/
                    var clone=$(this).parent().clone();
                    clone.find(".shop-in").remove();
                    clone.css({'border':'1px solid #ccc','margin-right':'3px','margin-bottom':'3px'});
                    clone.appendTo($('.shopcontent'));
                });

                /*加入购物车动画*/
                $('.shop-in').click(function(){
                    var clone1=$(this).parent().clone();
                    clone1.appendTo($(this).parent());
                    clone1.css({'position':'absolute','top':'0','left':'0'});
                    var offset=$('.shop').offset();
                    var offset1=th.offset();
                    $(this).parent().find('div').animate({
                        width:1,
                        height:1,
                        top:offset.top-offset1.top+$('.shop').height()/2,
                        left:offset.left-offset1.left+$('.shop').width()/2
                    },500,function(){
                        $(this).parent().find('div').remove();
                    });

                });
            },
            mouseleave:function(){
                $('.shop-in').remove();
            }
        });
    },

    /*遮罩处理*/
    createShopcar:function(){
        var shopcar=$('<div class="shop-on"></div><div class="shopcar"><div class="fixed"><img class="image" src="assets/images/shanchu.png" alt=""></div><div class="shopcontent"></div></div>');
        shopcar.appendTo($('body'));
        $('.shop-on').width(screen.width);
        $('.shop-on').height(screen.width);


        $('.shop').click(function(){
            $('.shop-on').addClass('show');
            $('.shopcar').addClass('show');

            /*每个物品绑定删除键*/
            $('.shopcontent').find('div').each(function(){
                $(this).bind({
                    'mouseenter':function(){
                        $(this).append($('<p class="shanchu">删除</p>'));
                        $(this).find('.shanchu').width($(this).width());
                        $(this).find('.shanchu').click(function(){
                            $(this).parent().remove();
                        })
                    },
                    'mouseleave':function(){
                        $(this).find('.shanchu').remove();
                    }
                });
            });

            /*返回键*/
            $('.shopcar').find('.image').click(function(){
                $('.shopcar').removeClass('show');
                $('.shop-on').removeClass('show');
                $('.shopcar').css({'top':'100px','left':'300px'});
                $('body').css({'overflow-y':'auto'});
            });

            /*兼容ie和firefox*/
            $(document).scrollTop(0);
            $('body').css({'overflow-y':'hidden'});
        });

    },

    init:function(){
        this.createShop();
        this.divShop();
        this.createShopcar()
    }

};