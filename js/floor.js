var floorNav=document.getElementById("floorNav");
var oLis=floorNav.getElementsByTagName("li");
var AList=floorNav.getElementsByTagName("a");

for(var i=0;i<oLis.length;i++){
    var li=oLis[i];
    li.onmouseover=function(){
        DOM.setCss(DOM.firstChild(this),"display","none");
        DOM.setCss(DOM.lastChild(this),"display","block");
    };
    li.onmouseout=function(){
        DOM.setCss(DOM.firstChild(this),"display","block");
        DOM.setCss(DOM.lastChild(this),"display","none");
    }
}



/*
console.log(AList);
for(var i=0;i<oLis.length;i++){
    var A=oLis[i];
    A[i]=i;
    A[i].onmouseover=function(){
        oLis[i].firstChild().className="none";
        oLis[i].lastChild().className="block";
    }
}*/
