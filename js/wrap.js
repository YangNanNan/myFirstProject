var oDiv = document.getElementById("wrap");
var strRange = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";
oDiv.onclick = function () {
    getCode();
};
function getCode() {
    var str = "";
    for (var i = 0; i < 4; i++) {
        var ran = Math.round(Math.random() * (61 - 0) + 0);
        var ranChar = strRange.charAt(ran);
        str += ranChar;
    }
    oDiv.innerHTML = str;
}
getCode();