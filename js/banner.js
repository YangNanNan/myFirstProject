~function () {
    var banner = document.getElementById("banner");
    var inner = document.getElementById("inner");
    var tips = document.getElementById("btn");
    var imgList = inner.getElementsByTagName("img");
    var oLis = tips.getElementsByTagName("li");
    var leftBtn = document.getElementById("leftBtn");
    var rightBtn = document.getElementById("rightBtn");
    var jsonData = null;
    !function dataBind() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "banner.txt", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                jsonData = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);

        var str = "";
        for (var i = 0; i < jsonData.length; i++) {
            var cur = jsonData[i];
            str += "<div><a href='#'><img src=''trueSrc='" + cur.img + "'/></a></div>"
        }
        str += "<div><a href='#'><img src=''trueSrc='" + jsonData[0].img + "'/></a></div>";
        inner.innerHTML = str;
        utils.setCss(inner, "width", (jsonData.length + 1) * 730);
        str = "";
        for (var j = 0; j < jsonData.length; j++) {
            if (j === 0) {
                str += "<li class='selected'></li>"
            } else {
                str += "<li></li>";
            }
        }
        tips.innerHTML = str;
    }();
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,730);
    //function imgDelay() {
    //    console.log(imgList);
    //    for (var i = 0; i < imgList.length; i++) {
    //        !function (i) {
    //            var curImg = imgList[i];
    //            if (curImg.isLoad) {
    //                return;
    //            }
    //            var tempImg = new Image();
    //
    //            tempImg.src = curImg.getAttribute("trueSrc");
    //            console.log();
    //
    //            tempImg.onload = function () {
    //                curImg.src = this.src;
    //                //curImg.style.display = "block";
    //                //zhufengAnimate(curImg, {opacity: 1}, 1000);
    //                tempImg = null;
    //            };
    //            curImg.isLoad = true;
    //        }(i);
    //    }
    //}
    //window.setTimeout(imgDelay, 1000);
    //var timer = window.setInterval(autoMove, 2000);
    //var step = 0;
    //var count = imgList.length;
    //function autoMove() {
    //    if (step == count - 1) {
    //        step = 0;
    //        utils.setCss(inner, "left", 0)
    //    }
    //    step++;
    //    zhufengAnimate(inner, {left: -step * 730}, 1000);
    //    focusAlign();
    //}
    //function focusAlign() {
    //    for (var i = 0; i < oLis.length; i++) {
    //        var tempStep = step > oLis.length - 1 ? 0 : step;
    //        var curLi = oLis[i];
    //        tempStep === i ? curLi.className = "selected" : curLi.className = "";
    //    }
    //}
    //banner.onmouseover = function () {
    //    window.clearInterval(timer);
    //    leftBtn.style.display = rightBtn.style.display = "block";
    //};
    //banner.onmouseout = function () {
    //    timer = window.setInterval(autoMove, 2000);
    //    leftBtn.style.display = rightBtn.style.display = "none";
    //};
    //~function () {
    //    for (var i = 0; i < oLis.length; i++) {
    //        var curLi = oLis[i];
    //        curLi.selfIndex = i;
    //        curLi.onclick = function () {
    //            step = this.selfIndex;
    //            zhufengAnimate(inner, {left: -step * 730}, 500);
    //            focusAlign();
    //        }
    //    }
    //}();
    //leftBtn.onclick = function () {
    //    //step == 0 ? step = 4 : step = step;
    //    if(step==0){
    //        step=count-1;
    //        utils.setCss(inner,"left",-step*730)
    //    }
    //    step--;
    //    zhufengAnimate(inner, {left: -step * 730}, 500,3);
    //    focusAlign();
    //};
    //rightBtn.onclick = autoMove;
}();
~function () {
    var banner = document.getElementById("bigBanner");
    var inner = document.getElementById("bigInner");
    var imgList = inner.getElementsByTagName("ul");
    var leftBtn = document.getElementById("leftBtn1");
    var rightBtn = document.getElementById("rightBtn1");
    var step= 0,tempStep=DOM.getCss(imgList[0],"width");
    leftBtn.onclick=function(){
        step=step+tempStep;
        if(step>0){
            zhufengAnimate(inner,{left:0},400);
            step=0;
        }else{
            zhufengAnimate(inner,{left:step},400)
        }
    };
    var end = -(imgList.length-1)*tempStep;
    rightBtn.onclick=function(){
        step=step-tempStep;

        if(step<end){
            zhufengAnimate(inner,{left:end},400);
            step=end;
        }else{
            zhufengAnimate(inner,{left:step},400)
        }
    }
}();






~function () {
    var banner = document.getElementById("banner2");
    var inner = document.getElementById("inner2");
    var imgList = inner.getElementsByTagName("img");
    var leftBtn = document.getElementById("leftBtn2");
    var rightBtn = document.getElementById("rightBtn2");
    var tips = document.getElementById("btn2");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,440);

}();

~function () {
    var banner = document.getElementById("banner3");
    var inner = document.getElementById("inner3");
    var imgList = inner.getElementsByTagName("img");
    var leftBtn = document.getElementById("leftBtn3");
    var rightBtn = document.getElementById("rightBtn3");
    var tips = document.getElementById("btn3");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,440);

}();

~function () {
    var banner = document.getElementById("banner4");
    var inner = document.getElementById("inner4");
    var imgList = inner.getElementsByTagName("img");
    var leftBtn = document.getElementById("leftBtn4");
    var rightBtn = document.getElementById("rightBtn4");
    var tips = document.getElementById("btn4");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,440);

}();
//三层轮播
~function () {
    var banner = document.getElementById("banner5");
    var inner = document.getElementById("inner5");
    var imgList = inner.getElementsByTagName("img");
    var leftBtn = document.getElementById("leftBtn5");
    var rightBtn = document.getElementById("rightBtn5");
    var tips = document.getElementById("btn5");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,440);

}();
//六层轮播
~function () {
    var banner = document.getElementById("banner6");
    var inner = document.getElementById("inner6");
    var imgList = inner.getElementsByTagName("img");
    var leftBtn = document.getElementById("leftBtn6");
    var rightBtn = document.getElementById("rightBtn6");
    var tips = document.getElementById("btn6");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,440);

}();

//八层轮播
~function () {
    var banner = document.getElementById("banner7");
    var inner = document.getElementById("inner7");
    var imgList = inner.getElementsByTagName("img");
    var leftBtn = document.getElementById("leftBtn7");
    var rightBtn = document.getElementById("rightBtn7");
    var tips = document.getElementById("btn7");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,440);

}();

//二层轮播
~function () {
    var banner = document.getElementById("banner8");
    var inner = document.getElementById("inner8");
    var imgList = inner.getElementsByClassName("innerList");
    var leftBtn = document.getElementById("leftBtn8");
    var rightBtn = document.getElementById("rightBtn8");
    var tips = document.getElementById("btn8");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,339);

}();
//四层轮播
~function () {
    var banner = document.getElementById("banner9");
    var inner = document.getElementById("inner9");
    var imgList = inner.getElementsByClassName("innerList");
    var leftBtn = document.getElementById("leftBtn9");
    var rightBtn = document.getElementById("rightBtn9");
    var tips = document.getElementById("btn9");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,339);

}();
//五层轮播
~function () {
    var banner = document.getElementById("banner10");
    var inner = document.getElementById("inner10");
    var imgList = inner.getElementsByClassName("innerList");
    var leftBtn = document.getElementById("leftBtn10");
    var rightBtn = document.getElementById("rightBtn10");
    var tips = document.getElementById("btn10");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,339);

}();
//七层轮播
~function () {
    var banner = document.getElementById("banner11");
    var inner = document.getElementById("inner11");
    var imgList = inner.getElementsByClassName("innerList");
    var leftBtn = document.getElementById("leftBtn11");
    var rightBtn = document.getElementById("rightBtn11");
    var tips = document.getElementById("btn11");
    var oLis = tips.getElementsByTagName("li");
    move(banner,inner,imgList,oLis,leftBtn,rightBtn,339);

}();

function move(banner,inner,imgList,oLis,leftBtn,rightBtn,scrollWidth){
    function imgDelay() {
        for (var i = 0; i < imgList.length; i++) {
            !function (i) {
                var curImg = imgList[i];
                if (curImg.isLoad) {
                    return;
                }
                var tempImg = new Image();
                tempImg.src = curImg.getAttribute("trueSrc");
                tempImg.onload = function () {
                    curImg.src = this.src;
                    tempImg = null;
                };
                curImg.isLoad = true;
            }(i);
        }
    }
    window.setTimeout(imgDelay, 1000);
    var timer = window.setInterval(autoMove, 2000);
    var step = 0;
    var count = imgList.length;
    function autoMove() {
        if (step == count - 1) {
            step = 0;
            utils.setCss(inner, "left", 0)
        }
        step++;
        zhufengAnimate(inner, {left: -step * scrollWidth}, 1000);
        if(oLis){
            focusAlign();
        }
    }
    if(oLis){
        function focusAlign() {
            for (var i = 0; i < oLis.length; i++) {
                var tempStep = step > oLis.length - 1 ? 0 : step;
                var curLi = oLis[i];
                tempStep === i ? curLi.className = "selected" : curLi.className = "";
            }
        }
        ~function () {
            for (var i = 0; i < oLis.length; i++) {
                var curLi = oLis[i];
                curLi.selfIndex = i;
                curLi.onclick = function () {
                    step = this.selfIndex;
                    zhufengAnimate(inner, {left: -step * scrollWidth}, 500);
                    focusAlign();
                }
            }
        }();
    }

    banner.onmouseover = function () {
        window.clearInterval(timer);
        leftBtn.style.display = rightBtn.style.display = "block";
    };
    banner.onmouseout = function () {
        timer = window.setInterval(autoMove, 2000);
        leftBtn.style.display = rightBtn.style.display = "none";
    };

    leftBtn.onclick = function () {
        //step == 0 ? step = 4 : step = step;
        if(step==0){
            step=count-1;
            utils.setCss(inner,"left",-step*scrollWidth)
        }
        step--;
        zhufengAnimate(inner, {left: -step * scrollWidth}, 500,3);
        focusAlign();
    };
    rightBtn.onclick = autoMove;
}
