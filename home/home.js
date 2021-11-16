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
    var header = document.getElementById("header");
    var nav = document.getElementById("nav");
    var left = document.getElementById("left");
    var right = document.getElementById("right");

    if(data.header){ //header
        console.log("header");
        if(data.header[0].titel){
            console.log("titel");
            header.innerHTML = "<h1>"+ data.header[0].titel +"</h1>";
        }
        if(data.header[0].untertitel){
            console.log("untertitel");
            header.innerHTML = header.innerHTML + "<h2>"+ data.header[0].untertitel +"</h2>";
        }
    }
    if(data.nav){ //nav
        console.log("navigation");
        for(i=0; i<data.nav.length; i++){
            nav.innerHTML = nav.innerHTML +"<a href='"+ data.nav[i].link +"'>"+ data.nav[i].name +"</a>";
        }
    }
    if(data.row){ // row
        if(data.row[0].left){ //left
            for(i=0; i<data.row[0].left.length; i++){
                left.innerHTML = left.innerHTML + "<div class='card'><h2>"+ data.row[0].left[i].titel +"</h2><p>"+ data.row[0].left[i].content +"</p></div>";
            }
        }
        if(data.row[0].right){ //right
            for(i=0; i<data.row[0].right.length; i++){
                right.innerHTML = right.innerHTML + "<div class='card'><h2>"+ data.row[0].right[i].titel +"</h2><p>"+ data.row[0].right[i].content +"</p></div>";
            }
        }
    }
}
