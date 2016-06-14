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
        xhr.open("get", "../banner.txt", false);
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
                    curImg.style.display = "block";
                    zhufengAnimate(curImg, {opacity: 1}, 1000);
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
        zhufengAnimate(inner, {left: -step * 1000}, 1000);
        focusAlign();
    }

    function focusAlign() {
        for (var i = 0; i < oLis.length; i++) {
            var tempStep = step > oLis.length - 1 ? 0 : step;
            var curLi = oLis[i];
            tempStep === i ? curLi.className = "selected" : curLi.className = "";
        }
    }
    banner.onmouseover = function () {
        window.clearInterval(timer);
        leftBtn.style.display = rightBtn.style.display = "block";
    };
    banner.onmouseout = function () {
        timer = window.setInterval(autoMove, 2000);
        leftBtn.style.display = rightBtn.style.display = "none";
    };
    ~function () {
        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            curLi.selfIndex = i;
            curLi.onclick = function () {
                step = this.selfIndex;
                zhufengAnimate(inner, {left: -step * 1000}, 500);
                focusAlign();
            }
        }
    }();
    leftBtn.onclick = function () {
        //step == 0 ? step = 4 : step = step;
        if(step==0){
            step=count-1;
            utils.setCss(inner,"left",-step*1000)
        }
        step--;
        zhufengAnimate(inner, {left: -step * 1000}, 500,3);
        focusAlign();
    };
    rightBtn.onclick = autoMove;
}();