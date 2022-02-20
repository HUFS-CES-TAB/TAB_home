function slide_left() {
    var TAT = document.querySelector("#TAB_abbreviation_text");
    TAT.style.visibility = "visible";
}

function fade_in() {
    var Joinus = document.querySelector("#JOINUS_text");
    var CMS = document.querySelector("#CMS_text");
    Joinus.style.opacity = "1";
    CMS.style.opacity = "1";
}
setTimeout(slide_left, 500);
setTimeout(fade_in , 1000); 
var home = document.getElementById('logo');
home.addEventListener('click',window.onload);

window.onload = function(){
    setTimeout(function(){
        scrollTo(0,0);

    },100);
}