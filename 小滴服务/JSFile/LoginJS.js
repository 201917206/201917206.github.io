function requestData(par1,par2,par3,callback){
    // 创建对象，对象的主要作用，负责到后台取数据
    var xhr = new XMLHttpRequest();
    // 配置请求信息
    xhr.open(par1, "http://106.75.16.42:8082/" + par2)
    xhr.setRequestHeader()
    // 发送
    xhr.send(par3);
    // 后端收到请求，处理，返回对应数据
    // 前端得到想要的内容
    xhr.onreadystatechange = function () {
        // 4：代表服务器正常  200：ok
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 所有的一切正常，拿到后台数据
            console.log(xhr.responseText);
            // 将服务器的json数据转换成javascrip的对象
            var res = JSON.parse(xhr.responseText)
        }
    }
}
    