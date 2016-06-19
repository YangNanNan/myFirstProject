
~function(){
    var aLink=document.getElementById("goLink");
    aLink.onclick=function(){
        var duration=500;
        var distance=utils.getWin("scrollTop");
        var interval=10;
        var step=(distance/duration);
        var timer=window.setInterval(function(){
            if(utils.getWin("scrollTop")<=0){
                window.clearInterval(timer);
                window.onscroll=showBtn;
                return;
            }
            var srcollsTop=utils.getWin("scrollTop");
            srcollsTop-=step;
            utils.getWin("scrollTop",srcollsTop);
            console.log(utils.getWin("scrollTop"));
        },interval);
        window.onscroll=null;
        this.style.display="none";
    };
    window.onscroll=showBtn;
    function showBtn(){
        var winScrollTop=utils.getWin("scrollTop");
        var screenHeight=utils.getWin("clientHeight");
        if(winScrollTop-screenHeight>0){
            aLink.style.display="block"
        }
    }
}();