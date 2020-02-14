function links (){
    var numberlinks = document.getElementsByTagName("a");
    var sizelinks = numberlinks.length;
    var lilinks = document.createElement("li");
    var cont1 = document.createTextNode(sizelinks);
    lilinks.appendChild(cont1);
    document.getElementById("list").appendChild(lilinks);
}
links();

function links2(){
    var numberlinks = document.getElementsByTagName("a");
    var lastlink = numberlinks[numberlinks.length - 1];
    var lilinks2 = document.createElement("li");
    var cont2 = document.createTextNode(lastlink);
    lilinks2.appendChild(cont2);
    document.getElementById("list").appendChild(lilinks2);
}
links2();

function links3(){
    var numberlinks = document.getElementsByTagName("a");
    var lastlink = numberlinks[numberlinks.length - 2];
    var lilinks3 = document.createElement("li");
    var cont3 = document.createTextNode(lastlink);
    lilinks3.appendChild(cont3);
    document.getElementById("list").appendChild(lilinks3);
}
links3();

function links4(){
    var wc = document.querySelectorAll("a[href='https://wemanconnect.com']");
    var lilinks4 = document.createElement("li");
    var cont4 = document.createTextNode(wc.length);
    lilinks4.appendChild(cont4);
    document.getElementById("list").appendChild(lilinks4);
}
links4();
function links5(){
    var p = document.getElementsByTagName("p");
    var link_p = p[2].getElementsByTagName("a");
    var lilinks5 = document.createElement("li");
    var cont5 = document.createTextNode(link_p.length);
    lilinks5.appendChild(cont5);
    document.getElementById("list").appendChild(lilinks5);
}
links5();

function display(){
    document.getElementsByClassName("aditional")[0].classList.remove("hidden")
    document.getElementsByClassName("aditional")[0].classList.add("visible");

}

function add(){
    var new_li = document.createElement("li");
    var text_li = document.createTextNode("Algo");
    new_li.appendChild(text_li);
    document.getElementById("list").appendChild(new_li);
}