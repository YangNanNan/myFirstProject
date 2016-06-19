$(function(){
    var $searchInput=$("#searchInput"),
        $search=$(".search"),
        $searchList=$search.children(".searchList");
    $searchInput.on("focus keyup",function(){
        var val=$(this).val().replace(/^ +| +$/g,"");
        if(val.length>0){
            $searchList.stop().slideDown(200);
        }else{
//                $searchList.css("display","none");
            $searchList.stop().slideUp(200);
        }
        showList();
    });
    $("body").on("click",function(e){
        var tar= e.target,$tar=$(tar);
        if(tar.id==="searchInput"){
            return;
        }
        if(tar.tagName.toUpperCase()==="LI"&& $tar.parent()){
            $searchList.css("display","none");
            $searchInput.val($tar.html());
            return;
        }
        $searchList.css("display","none");
    });
    function showList(){
        var val=$searchInput.val().replace(/^ +| +$/g,"");
        if(val.length===0){
            return;
        }
        $.ajax({
            url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=h&cb=jQuery110206266167622339474_1464758255946&_=1464758255979"+val,
            type:"get",
            dataType:"jsonp",
            jsonp:"cb",
            success:function(data){
                var str="";
                if(data && data["s"]){
                    data=data["s"];
                    $.each(data,function(index,curData){
                        if(index<=3){
                            str+="<li>"+item+"</li>";
                        }
                    })
                }
                if(!str){
                    $searchList.css("display","none");
                    return;
                }
                $searchList.html(str);
            }
        })
    }
})
