//File Name：mastershang.js
//Auther: CCP

//Stop Right Click
function stop () { return false; }
document.oncontextmenu = stop;


// 或者直接返回整个事件
document.oncontextmenu = function () { return false; }

document.onselectstart = function () { return false; }

// 或者直接返回整个事件
document.oncopy = function () { return false; }


// 百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e0937f11b00106433aa79fecfc01305c";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
