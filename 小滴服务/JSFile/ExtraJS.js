var xhr = new XMLHttpRequest();
xhr.open("get", "http://106.75.16.42:8082/aboutus")
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        var res = JSON.parse(xhr.responseText)
        var h1 = document.getElementById("main_h1");
        var h3 = document.getElementById("main_h3");
        var p = document.getElementById("main_p");
        h1.innerText = res.data.title;
        h3.innerHTML = res.data.subTitle;
        p.innerHTML = res.data.info;
    }
}

var xh = new XMLHttpRequest();
xh.open("get", "http://106.75.16.42:8082/getimg")
xh.send();
xh.onreadystatechange = function () {
    if (xh.readyState == 4 && xh.status == 200) {
        console.log(xh.responseText);
        var res = JSON.parse(xh.responseText)
        var img = document.getElementById("second_img");
        img.src  = res.data;
    }
}