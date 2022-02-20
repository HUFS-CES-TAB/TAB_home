//scroll_move
const logo_btn = document.getElementById("logo");
const act_btn = document.getElementById("activity");
const ach_btn = document.getElementById("achievement");
const adv_btn = document.getElementById("advantage");
const QnA_btn = document.getElementById("QnA");

const main = document.getElementsByClassName("main");
const activity = document.getElementsByClassName("activity");
const achievements = document.getElementsByClassName("achievements");
const advantages = document.getElementsByClassName("advantages");
const QnA = document.getElementsByClassName("QnA");

logo_btn.addEventListener('click', () => {
    
    window.scrollBy({top: main[0].getBoundingClientRect().top-100, behavior: 'smooth'});
});
act_btn.addEventListener('click', () => {
    
    window.scrollBy({top: activity[0].getBoundingClientRect().top-50, behavior: 'smooth'});
});
ach_btn.addEventListener('click', () => {
    
    window.scrollBy({top: achievements[0].getBoundingClientRect().top-50, behavior: 'smooth'});
});
adv_btn.addEventListener('click', () => {
    
    window.scrollBy({top: advantages[0].getBoundingClientRect().top-50, behavior: 'smooth'});
});
QnA_btn.addEventListener('click', () => {
    
    window.scrollBy({top: QnA[0].getBoundingClientRect().top-50, behavior: 'smooth'});
});