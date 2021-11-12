let showMenu = document.getElementById('showMenu');
let menuu = document.getElementById('menu');

let menu = true;


showMenu.addEventListener("click", ()=>{
    menu= !menu 
    console.log(menu)
    if(menu==false){
        menuu.style.display= "none";
    }else{

        menuu.style.display= "block";
    }
})