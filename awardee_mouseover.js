var img = document.getElementsByClassName("achievement_item_img");

const HIDDEN_CLASSNAME = "hidden"; 

function handleImgMouseover(e) {
    e.target.style.opacity = "0.5";
    var awardee =  e.target.parentElement.children[3]
    awardee.classList.remove(HIDDEN_CLASSNAME);
}

function handleImgMouseout(e) {
    e.target.style.opacity = "1";
    var awardee =  e.target.parentElement.children[3]
    awardee.classList.add(HIDDEN_CLASSNAME);
}
for(var i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", handleImgMouseover);
    img[i].addEventListener("mouseout", handleImgMouseout);
}