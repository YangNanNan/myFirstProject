~function(){
    //定义一个匀速运动效果
    var zhufengeffect={
        linear:function (t,b,c,d){
        return b+t/d*c;
    }
        };
    /**
     *
     * @param curEle 需要运动的元素
     * @param target Object 需要运动的终点
     * @param duration 需要运动的时间间隔
     */
    function move(curEle,target,duration,effect,callback){//驱动元素运动的
        window.clearInterval(curEle.timer);
        var time=null;
        var interval=10;
        var begin={};//通过传入来target的维度来确定begin有多少个维度
        var change={};
        var tempEffect=zhufengeffect.linear;
        if(typeof effect=="number"){
            switch(effect){
                case 1:
                    tempEffect=effect.Bounce.easeIn;
                    break;
            }
        }else if(effect instanceof Array){
            //tempEffect=zhufengEffect[effect[0]][effect[1]]
        }else{//既不是数字也不是数组
            callback=effect;
        }
        for(var key in target){//需要通过target的维度（属性多少）来查找我们begin的属性，因为其他如果不是target的属性，我们这个维度就没有必要获取了。
            if(target.hasOwnProperty(key)){
                //通过target的维度给begin添加维度
                begin[key]=DOM.getCss(curEle,key);
                change[key]=target[key]-begin[key];
            }
        }
    //    以上只是获取了动画需要的一些条件，t,b,c,d
    //    接下来需要去开启定时器并且完成动画
        curEle.timer=window.setInterval(function(){
        //    1、越界判断 2、设置每个维度的值 3、
            time+=interval;
            if(time>=duration){
                window.clearInterval(curEle.timer);
                //我们还要赋值target终点
                utils.setGroupCss(curEle,target);
                if(typeof callback=="function"){
                    callback.call(curEle);
                }
                return;
            }
            //需要分别处理每一个维度，target里面的维度都需要处理
            for(var k in target){
                if(target.hasOwnProperty(k)){
                    //这里所有能遍历出来的维度需要处理
                    var curPosi=tempEffect(time,begin[k],change[k],duration);
                    utils.setCss(curEle,k,curPosi);
                }
            }
        },interval)
    }
    window.zhufengAnimate=move;
}();