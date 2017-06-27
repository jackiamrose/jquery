/**
 * Created by user-pc on 2017/1/12.
 */
$(function(){
    var animate=function (o,p){
        var pageX;
        var pageY;
        var flag=true;
        o.bind({
            'mousedown':function(e){
                pageX= e.pageX-o.offset().left;
                pageY= e.pageY-o.offset().top;
                flag=true;
            },
            'mousemove':function(e){
                $(document).mouseleave(function(){
                    flag=false;
                });
                if(flag){
                    p.css({
                        left:e.pageX-pageX,
                        top:e.pageY-pageY
                    })
                }
                e.preventDefault();
            },
            'mouseup':function(){
                flag=false;
            }
        });
    };
    var move=$('.shopcontent');
    var parent=$('.shopcar');
    animate(move,parent);
});
