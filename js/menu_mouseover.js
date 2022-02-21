//menu_mouseover 
var menu = document.getElementsByClassName("menu_wrap")
var menuItem = document.getElementsByClassName("menu_item");
function handleMenuMouseOver(e) {

    if (screen.width > 540) {
        e.target.style.animation = "mouseover 0.5s 1";
        e.target.style.fontSize = "2vh";
    }else {
        e.target.style.animation = "mouseover_mobile 0.5s 1";
        e.target.style.fontSize = "1.5vh";
    }
    e.target.style.fontWeight = "bold";

}

function handleMenuMouseOut(e) {

    if (screen.width > 540) {
        e.target.style.fontSize = "1.5vh";
    }else {
        e.target.style.fontSize = "0.5vh";
    }
    
    e.target.style.animation = "none";
    e.target.style.fontWeight = "200";
}

for(var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("mouseover", handleMenuMouseOver);
    menuItem[i].addEventListener("mouseout", handleMenuMouseOut)
}
