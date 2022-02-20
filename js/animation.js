//main_animation
function slide_left() {
    var TAT = document.querySelector("#TAB_abbreviation_text");
    TAT.style.visibility = "visible";
}

function fade_in() {
    var applyBtn = document.querySelector(".apply_btn");
    applyBtn.style.opacity = "1";
}
setTimeout(slide_left, 500);
setTimeout(fade_in , 1000); 