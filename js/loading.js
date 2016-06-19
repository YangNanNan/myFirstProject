//图片延迟加载
~function(){
    // 首先获取所有的图片集合
    var allImg = document.getElementsByTagName("img");
    /*for(var i=0;i<allImg.length;i++){
        DOM.setCss(allImg[i],"opacity","0");
    }*/
    //图片延迟加载 首先实现单张图片延迟加载
    function imgDelayLoad(curImg){//这个函数要被调用jsonData.length次
        if(curImg.isLoad){
            return;
        }
        var tempImg = new Image;
        tempImg.src = curImg.getAttribute("trueSrc");//临时的图片去加载真实的图片资源
        tempImg.onload = function(){
            curImg.src = this.src;//说明已经加载成功,说明图片的资源路径是有效的
            tempImg = null;
        };
        curImg.isLoad = true;//只要曾经加载过,不管是否成功都没有必要去进行第二次加载
    }
//多张图片延迟加载
    function allImgDelay(){
        for(var i=0;i<allImg.length;i++){//给每一个图片延迟加载
            var curImg = allImg[i];
            if(curImg.isLoad){continue}//优化 曾经加载过的图片就不需要再延迟加载了
            var browerBottomDisBodyTop = DOM.getWin("clientHeight") + DOM.getWin("scrollTop");//浏览器底部距离body顶端
            var imgParentBottomDisBodyTop = DOM.offset(curImg.parentNode).top + curImg.parentNode.offsetHeight;//图片父亲容器底部距离body顶端
            if(browerBottomDisBodyTop>imgParentBottomDisBodyTop){//判断这个图片是否已经出现在了浏览器的可视窗口内,要判断img这个图片的parentNode
                imgDelayLoad(allImg[i]);//分别多次调用单个图片延迟加载
                //zhufengAnimate(allImg[i],{"opacity":1},1500);
            }
        }
    }
    window.setTimeout(allImgDelay,1000);//第一屏图片延迟加载,第一屏已经完全出现在可视窗口内,所以就需要图片延迟加载
    window.onscroll = allImgDelay;//其他图片滚动的时候加载
}();