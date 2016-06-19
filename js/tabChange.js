~function(){
    var oTab=document.getElementById("tab");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList");
    var oDivs=tabList.getElementsByClassName("tabCon");
    change(oLis,oDivs);
}();
//二楼
~function(){
    var oTab=document.getElementById("tab1");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList1");
    var oDivs=tabList.getElementsByClassName("tab_List");
    change2(oLis,oDivs)
}();
//三楼
~function(){
    var oTab=document.getElementById("tab2");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList2");
    var oDivs=tabList.getElementsByClassName("tabCon");
    change(oLis,oDivs)
}();
//四楼
~function(){
    var oTab=document.getElementById("tab3");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList3");
    var oDivs=tabList.getElementsByClassName("tab_List");
    change2(oLis,oDivs)
}();
//五楼
~function(){
    var oTab=document.getElementById("tab4");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList4");
    var oDivs=tabList.getElementsByClassName("tab_List");
    change2(oLis,oDivs)
}();
//六层
~function(){
    var oTab=document.getElementById("tab5");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList5");
    var oDivs=tabList.getElementsByClassName("tabCon");
    change(oLis,oDivs);
}();
//七楼
~function(){
    var oTab=document.getElementById("tab6");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList6");
    var oDivs=tabList.getElementsByClassName("tab_List");
    change2(oLis,oDivs)
}();
// 八楼
~function(){
    var oTab=document.getElementById("tab7");
    var oLis=oTab.getElementsByTagName("li");
    var tabList=document.getElementById("tabList7");
    var oDivs=tabList.getElementsByClassName("tabCon");
    change(oLis,oDivs)
}();

function change(oLis,oDivs){
    function tab(n){
        for(var i=0;i<oLis.length;i++){
            oLis[i].className="tab_list";
            oDivs[i].className="tabCon";
        }
        oLis[n].className="tab_list active redBorder";
        DOM.addClass(oDivs[n],"active")
    }
    for(var i=0;i<oLis.length;i++){
        oLis[i].idCard=i;
        oLis[i].onmouseover=function(){
            tab(this.idCard);
        }
    }
}
function change2(oLis,oDivs){
    function tab(n){
        for(var i=0;i<oLis.length;i++){
            oLis[i].className="tab_list";
            oDivs[i].className="tab_List";
            //console.log(oDivs[i].className);
            //DOM.removeClass(oDivs[i],"active")
        }
        oLis[n].className="tab_list active redBorder";
        //DOM.firstChild(oLis[n]).className="redBorder";
        //oLis[n].a.className="redBorder";
        //oDivs[n].className="tabCon active";
        DOM.addClass(oDivs[n],"active")
    }
    for(var i=0;i<oLis.length;i++){
        oLis[i].idCard=i;
        oLis[i].onmouseover=function(){
            tab(this.idCard);
        }
    }
}