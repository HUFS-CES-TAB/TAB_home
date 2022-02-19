function slide_left() {
    var TAT = document.querySelector("#TAB_abbreviation_text");
    TAT.style.animation = "slide_left 0.5s 1";
    TAT.style.visibility = "visible";
}

function fade_in() {
    var applyBtn = document.querySelector(".apply_btn");
    applyBtn.style.animation = "fade_in 1s 1";
    applyBtn.style.visibility = "visible";
}
setTimeout(slide_left, 300);
setTimeout(fade_in , 800);