var data;

function site_start(){
    console.log("Test");
    load_data();
}

function load_data(){
    var requestURL = "home.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      data = request.response;
      site_load();
    }
}

function site_load(){
    if(document.getElementById("header")){
        console.log("header");
        var header = document.getElementById("header");
        if(data.header[0].titel){
            console.log("titel");
        }
    }
}