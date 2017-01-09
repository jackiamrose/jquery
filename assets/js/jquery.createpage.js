/*页面加载之后运行js*/
$(function(){
    creatList.Inite(5,5);
    dataBase.Inite();
    selectPro.Inite();
});
/*菜单选择*/
var creatList = {
    List: function (num1, num2) {
        var list1 = $("<ul class='main-block1'></ul>");
        for (var i = 0; i < num1; i++) {
            var list = $("<li class='list1'><a class='title'>第一级菜单" + (i + 1) + "</a></li>");
            list1.append(list);
            var str1 = $("<ul class='main-block2'></ul>");
            for (var j = 0; j < num2; j++) {
                var str2 = $("<li class='list2'><a class='title'>第二级菜单" + (j + 1) + "</a></li>");
                str1.append(str2);
            }
            list.append(str1);
        }
        $(".main-left").append(list1);
        $(".list2").find("a:empty").remove();
    },

    showList: function () {
        $(".list1:first").find(".main-block2").addClass("show");
        $(".list1").each(function () {
            $(this).click(function () {
                $(this).parent().find("li ul").attr("class", "main-block2");
                $(this).parent().find(" li li.title").removeAttr("style");
                $(this).find(".main-block2").attr("class", ".main-block2 show");
                $(this).find("li.title").css({"background-color":"#666","color":"white"});
            });
        })
    },


    Inite: function (num1, num2) {
        this.List(num1, num2);
        this.showList();
    }

};
/*手机分类*/
var dataBase = {
    dataPro:{
        "品牌":["全部",
            "Huawei/华为",
            "Apple/苹果",
            "vivo",
            "Samsung/三星",
            "OPPO",
            "MIUI/小米",
            "Nokia/诺基亚",
            "Coolpad/酷派",
            "HTC",
            "Letv/乐视",
            "LG",
            "Lenovo/联想",
            "Motorola/摩托罗拉",
            "Meizu/魅族",
            "Philips/飞利浦",
            "ZTE/中兴",
            "Gionee/金立",
            "Sony Ericsson/索尼爱立信",
            "nubia/努比亚",
            "Hisense/海信",
            "TCL",
            "K-Touch/天语",
            "小辣椒（手机）",
            "OnePlus/一加",
            "Daxian/大显",
            "Sharp/夏普",
            "Meitu/美图",
            "SMARTISAN/锤子",
            "Asus/华硕",
            "Konka/康佳",
            "Haier/海尔",
            "DOOV/朵唯",
            "Microsoft/微软",
            "Acer/宏碁",
            "魅蓝",
            "Green Orange/青橙",
            "奇酷",
            "Yusun/语信",
            "Skyworth/创维",
            "iuni",
            "dakele/大可乐"],
        "上市时间":["全部",
            "2011年",
            "2013年",
            "2014年",
            "2015年",
            "2015年5月",
            "2015年9月",
            "2015年10月",
            "2015年11月",
            "2015年12月"],
        "像素": ["全部",
            "200万",
            "500万",
            "800万",
            "1210万",
            "1278万",
            "1200万",
            "1300万",
            "1300万",
            "1600万",
            "2070万",
            "2100万"],
        "尺寸":["全部",
            "2.4英寸",
            "5.0英寸",
            "5英寸",
            "5",
            "5.1英寸",
            "5.2英寸",
            "5.0-5.5英寸",
            "5.5寸",
            "5.5英寸",
            "5.7英寸"]
    },
    creatPro:function(){
        var name=dataBase.dataPro;
        var a;
        for(a in name){
            if(name.hasOwnProperty(a)){
                var ul =$("<ul class='ul'></ul>");
                var li =$("<li class='li'>"+a+"</li>");
                ul.append(li);
                try{
                    name[a].forEach(function(x,y){
                        ul.append("<li class='list'>"+x+"</li>");
                    });
                }catch(e){
                    for(var i=0;i<name[a].length;i++){
                        ul.append("<li class='list'>"+name[a][i]+"</li>");
                    }
                }

                ul.appendTo(".main-right");
            }
        }
        /*选择产品*/
        $('.list').click(function(){
            $(this).parent().find(".list").css({"background-color":"transparent","color":"black"});
            $(this).css({"background-color":"#666","color":"white"});
        });


        $("ul.ul:first-child li.list").each(function(){
            $(this).click(function(){
                var d=$(this).html();
                $('.main-right div').each(function(){
                    $(this).removeClass('div')
                });
                if(d =="全部"){
                    $('.main-right div').each(function(){
                        $(this).addClass('div');
                    })
                }else{
                    $('.main-right div').each(function(){
                        if($(this).find("h3").html()==d){
                            $(this).addClass('div')
                        }
                    });
                }
            });

        });
        $("ul.ul:nth-child(2) li.list").each(function(){
            $(this).click(function(){
                var d=$(this).html();
                $('.main-right div').each(function(){
                    $(this).removeClass('add')
                });
                if(d =="全部"){
                    $('.main-right div').each(function(){
                        $(this).addClass('add');
                    })
                }else{
                    $('.main-right div').each(function(){
                        if($(this).find("p").html()==d){
                            $(this).addClass('add')
                        }
                    });
                }
            })
        });
        $("ul.ul:nth-child(3) li.list").each(function(){
            $(this).click(function(){
                var d=$(this).html();
                $('.main-right div').each(function(){
                    $(this).removeClass('abb')
                });
                if(d =="全部"){
                    $('.main-right div').each(function(){
                        $(this).addClass('abb');
                    })
                }else{
                    $('.main-right div').each(function(){
                        if($(this).find("span").eq(1).html()==d){
                            $(this).addClass('abb');
                        }
                    });
                }
            });

        });
        $("ul.ul:last-child li.list").each(function(){
            $(this).click(function(){
                var d=$(this).html();
                $('.main-right div').each(function(){
                    $(this).removeClass('acc');
                });
                if(d =="全部"){
                    $('.main-right div').each(function(){
                        $(this).addClass('acc');
                    })
                }else{
                    $('.main-right div').each(function(){
                        if($(this).find("span:eq(0)").html()==d){
                            $(this).addClass('acc');
                        }
                    });
                }
            });

        })


    },
    Inite:function(){
        this.creatPro();
    }
};
/*手机图片信息*/
var selectPro= {
    proInfo: [
        ["Huawei/华为", "assets/images/iphone6.jpg", "2015年", "5.0英寸", "1210万"],
        ["Huawei/华为", "assets/images/iphone6.jpg", "2014年", "5.5英寸", "1600万"],
        ["Apple/苹果", "assets/images/iphone6.jpg", "2015年10月", "5英寸", "2100万"],
        ["Apple/苹果", "assets/images/iphone6.jpg", "2015年10月", "5英寸", "800万"],
        ["vivo", "assets/images/iphone6.jpg", "2014年", "5英寸", "200万"],
        ["Samsung/三星", "assets/images/iphone6.jpg", "2015年11月", "5英寸", "1600万"],
        ["Samsung/三星", "assets/images/iphone6.jpg", "2013年", "5英寸", "1210万"],
        ["OPPO", "assets/images/iphone6.jpg", "2013年", "5.7英寸","1600万"],
        ["MIUI/小米", "assets/images/iphone6.jpg", "2015年12月", "5.5英寸", "2070万"],
        ["Nokia/诺基亚", "assets/images/iphone6.jpg", "2015年12月", "2.4英寸", "2070万"],
        ["OPPO", "assets/images/iphone6.jpg", "2011年", "5.5英寸","800万"],
        ["Letv/乐视", "assets/images/iphone6.jpg", "2015年12月", "5.7英寸", "800万"],
        ["Lenovo/联想", "assets/images/iphone6.jpg", "2015年5月", "5", "1300万"],
        ["Lenovo/联想", "assets/images/iphone6.jpg", "2015年12月", "5.0-5.5英寸", "800万"],
        ["魅蓝", "assets/images/iphone6.jpg", "2015年5月", "5", "1278万"],
        ["DOOV/朵唯", "assets/images/iphone6.jpg", "2015年11月", "5.5英寸", "2100万"],
        ["nubia/努比亚", "assets/images/iphone6.jpg", "2015年12月", "5.0英寸", "1300万"],
        ["ZTE/中兴", "assets/images/iphone6.jpg", "2011年", "5.0英寸", "1200万"],
        ["Asus/华硕", "assets/images/iphone6.jpg", "2011年", "5.0英寸", "2100万"],
        ["OnePlus/一加", "assets/images/iphone6.jpg", "2014年", "5.0英寸", "1600万"]
    ],

    select: function () {
        var proName = this.proInfo;
        var a;
        for (a in proName) {
            if (proName.hasOwnProperty(a)) {
                var div = $("<div class='div add abb acc'></div>");
                /*ie7以下不支持foreach方法*/
                try{
                    proName[a].forEach(function (i, j) {
                        if(j ==0){
                            var proPhone =$("<h3>"+i+"</h3>");
                            proPhone.appendTo(div);
                        }else if(j ==1){
                            var proImg=$("<img src="+i+">");
                            proImg.appendTo(div);
                        }else if(j ==2){
                            var proTime=$("<p>"+i+"</p>");
                            proTime.appendTo(div);
                        }else{
                            var proOther=$("<span class='span'>"+i+"</span>");
                            proOther.appendTo(div);
                        }
                    })
                }catch(e){
                    for(var i= 0,len=proName[a].length;i<len;i++){
                        if(i ==0){
                            var proPhone =$("<h3>"+proName[a][i]+"</h3>");
                            proPhone.appendTo(div);
                        }else if(i ==1){
                            var proImg=$("<img src="+proName[a][i]+">");
                            proImg.appendTo(div);
                        }else if(i ==2){
                            var proTime=$("<p>"+proName[a][i]+"</p>");
                            proTime.appendTo(div);
                        }else{
                            var proOther=$("<span class='span'>"+proName[a][i]+"</span>");
                            proOther.appendTo(div);
                        }
                    }
                }
            }
            div.appendTo(".main-right");
        }
    },

    Inite: function(){
        this.select();
    }
};