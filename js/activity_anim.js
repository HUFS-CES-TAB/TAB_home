const target = document.querySelector('.target');
const links = document.querySelectorAll('.activities_menu_wrap li');

for(let i=0;i<links.length;i++){
    // links[i].addEventListener('click',(e)=>e.preventDefault());
    links[i].addEventListener('click',mouseenterFunc);
}

function mouseenterFunc(){
    console.log("g");
    for(let i =0;i<links.length;i++){
        if(links[i].parentNode.classList.contains('current')){
            
            links[i].parentNode.classList.remove('current');
        }
        links[i].style.opacity ='0.25';
    }
    
    this.parentNode.classList.add('current');
    this.style.opacity ='1';
}