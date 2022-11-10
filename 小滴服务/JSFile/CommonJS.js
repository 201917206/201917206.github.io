// 创建对象，对象的主要作用，负责到后台取数据
var xhr = new XMLHttpRequest();
// 配置请求信息
xhr.open("get", "https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/aboutus")
// 发送
xhr.send();
// 后端收到请求，处理，返回对应数据
// 前端得到想要的内容
xhr.onreadystatechange = function () {
    // 4：代表服务器正常  200：ok
    if (xhr.readyState == 4 && xhr.status == 200) {
        // 所有的一切正常，拿到后台数据
        console.log(xhr.responseText);
        // 将服务器的json数据转换成javascrip的对象
        var res = JSON.parse(xhr.responseText)
        // 展示到页面
        // 1.获取需要展示的DOM标签-3个-JS-DOM技术
        // document.getElementsByTagName("main_p").innerHTML = rse.date.info; 
        var h1 = document.getElementById("main_h1");
        var h3 = document.getElementById("main_h3");
        var p = document.getElementById("main_p");
        h1.innerText = res.data.title;
        h3.innerHTML = res.data.subTitle;
        p.innerHTML = res.data.info;
    }
}