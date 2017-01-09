/**
 * Created by user-pc on 2015/11/23.
 */
$(function(){
    /*生成图片*/
    var num=4;
    var img = $("<div class='img'></div>");
    $(".main-left").append(img);
    img.append($("<ul class='ull'></ul>"));
    for(var i=0;i<num;i++){
        var li = $("<li><img src='assets/images/"+(i+1)+".jpg'  alt=''/></li>");
        $(".ull").append(li);
    }

    img.append("<div class='weizhi'></div>");
    $(".weizhi").append("<div class='zuo'><span><</span></div>"+"<div class='you'><span>></span></div>");
    img.append('<div class="circle"></div>');
    for(var j=0;j<num;j++){
        if(j==0){
            var str1 = $("<div class='active'></div>");
        }else{
            var str1 = $("<div></div>");
        }
        $(".circle").append(str1);
    }



    /*动态显示*/
    var ul = $(".ull");
    var n = 0;
    var l =$("img:first").width();
    ul.width(l*num);
    var len = l;
    var leng =num;
    $(function() {

        function dong(){
            ul.animate({
                left:-len*n
            },300)
        }

        /*左右点击下一张图片*/
        $(".weizhi div").each(function(){
            $(this).click(function(){
                if($(this).attr("class")=="zuo"){
                    dong();
                    if(n==0){
                        n=leng-1
                    }else{
                        n--}
                }else{
                    dong();
                    if(n==(leng-1)){
                        n=0
                    }else{
                        n++}
                }
                $(".circle div").eq(n-1).attr("class","active");
                $(".circle div").eq(n-1).siblings("div").removeAttr("class");
            })
        });


        /*点击圈圈选择图片*/
        $(".circle div").each(function(){
            $(this).click(function(){
                var index = $(this).index();
                n = index;
                dong();
                $(this).attr("class","active");
                $(this).siblings("div").attr("class","");
            })
        });

        setInterval(function(){
            dong();
            if(n==(leng-1)){
                n=0
            }else{
                n++}
            $(".circle div").eq(n-1).attr("class","active");
            $(".circle div").eq(n-1).siblings("div").removeAttr("class");
        },2000)

    });
});