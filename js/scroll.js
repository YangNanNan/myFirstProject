/**
 * sroll横屏滚动函数包
 * @param inner
 * @param innerList
 * @param leftBtn
 * @param rightBtn
 * @param leftShw
 * @param rightShw
 * @param {Number} fnNum
 * @param banner
 */
function sroll(inner, innerList, leftBtn, rightBtn,fnNum,banner) {
    var step = 0;
    var liWidth = DOM.getCss(innerList[0], "width");//->单个li长度
    if(DOM.getCss(innerList[0], "margin-right")){
        liWidth = DOM.getCss(innerList[0], "margin-right")+DOM.getCss(innerList[0], "width");

        var allWidth = liWidth * innerList.length;
    }else{
        var allWidth = DOM.getCss(innerList[0], "width") * innerList.length;
    }
    var tempStep = liWidth * 3;//->滚动步长
    var end = liWidth * 4;//->滚动结束边界
    if(banner){
        end = DOM.getCss(banner,"width");
        tempStep = DOM.getCss(banner,"width")-end%liWidth;
    }
    DOM.setCss(inner, "width", allWidth);
    DOM.setCss(leftBtn, "display", "none");
    leftBtn.onclick = function () {
        step = step + tempStep;
        if (step > 0) {
            jackAnimate(inner, {left: 0}, 400, fnNum);
            step = 0;
            DOM.setCss(leftBtn, "display", "none");
            return;
        } else {
            jackAnimate(inner, {left: step}, 400, fnNum);
            DOM.setCss(rightBtn, "display", "block");
        }
    };
    rightBtn.onclick = function () {
        step = step - tempStep;
        if (step < -(allWidth - end)) {
            jackAnimate(inner, {left: -(allWidth - end)}, 400, fnNum);
            step = -(allWidth - end);
            DOM.setCss(rightBtn, "display", "none");
            return;
        } else {
            jackAnimate(inner, {left: step}, 400, fnNum);
            DOM.setCss(leftBtn, "display", "block");
        }
    }
}