var menu = document.getElementsByClassName("menu_wrap")
var menuItem = document.getElementsByClassName("menu_item");
function handleMouseOver(e) {
    e.target.style.animation = "mouseover 0.5s 1";
    e.target.style.fontWeight = "bold";
    e.target.style.fontSize = "20px";
    e.target.style.cursor = "pointer";

}

function handleMouseOut(e) {
    e.target.style.animation = "none";
    e.target.style.fontWeight = "200";
    e.target.style.fontSize = "17px"
}

for(var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("mouseover", handleMouseOver);
    menuItem[i].addEventListener("mouseout", handleMouseOut)
}
