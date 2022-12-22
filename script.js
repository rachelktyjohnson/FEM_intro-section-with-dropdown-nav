const icon_open_menu = document.querySelector(".open-menu");
const icon_close_menu = document.querySelector(".close-menu");
const navigation_container = document.querySelector(".navigation-container");
const overlay = document.querySelector(".overlay");

icon_open_menu.addEventListener('click', ()=>{
    //show navigation container
    navigation_container.style.display = "block";

    //show overlay
    overlay.style.display = "block";
})

icon_close_menu.addEventListener('click', ()=>{
    //hide navigation container
    navigation_container.style.display = "none";

    //hide overlay
    overlay.style.display = "none";
})


const features = document.querySelector('.features');
const submenu_features = document.querySelector('.submenu-features');
const company = document.querySelector('.company');
const submenu_company = document.querySelector('.submenu-company');

function addSubmenuEventListener(menu_item, submenu_item){
    menu_item.addEventListener('click', ()=>{
        if (submenu_item.style.display === "none"){
            submenu_item.style.display = "block";
            menu_item
        } else {
            submenu_item.style.display = "none";
        }
    })
}

addSubmenuEventListener(features, submenu_features);
addSubmenuEventListener(company, submenu_company);