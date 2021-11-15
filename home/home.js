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
            header.innerHTML = "<h1>"+ data.header[0].titel +"</h1>";
        }
        if(data.header[0].untertitel){
            console.log("untertitel");
            header.innerHTML = header.innerHTML + "<h2>"+ data.header[0].untertitel +"</h2>";
        }
    }
    if(document.getElementById("nav")){
        console.log("navigation");
        var nav = document.getElementById("nav");
        if(data.nav[0]){
            for(i=0; i<data.nav[0].length; i++){
                nav.innerHTML = nav.innerHTML +"<a href='"+ data.nav[i].link +"'>"+ data.nav[i].titel +"</a>";
            }
        }
    }
}