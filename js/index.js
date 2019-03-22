
var xmlhttp = new XMLHttpRequest();
var url = "https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var jsonArr = JSON.parse(this.responseText);
        //console.log(jsonArr)
        //console.log(jsonArr.meta.view.length)
        for(var i = 0; i < jsonArr.data.length; i++) {
            var obj = jsonArr.data[i] 
           // console.log(obj[10])
           // console.log(obj[9])
           // console.log(obj[12])
           document.getElementById('result').innerHTML += obj[10] + "&nbsp&nbsp|&nbsp&nbsp  " 
                                             + obj[9] + "&nbsp&nbsp|&nbsp&nbsp" + obj[12] + "<br>" + "<br>"
        }
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();