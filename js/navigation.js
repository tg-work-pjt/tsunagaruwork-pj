function SwitchNavigation(){
    let isMenuActive = document.getElementById("mobile-menu").classList.contains("mobile-menu_active");

    if(isMenuActive){
        document.getElementById("mobile-menu").classList.remove("mobile-menu_active");
        document.getElementById("mobile-menu").classList.add("mobile-menu_inactive");
        document.getElementById("header-navigation-mobile__button-top").classList.remove("header-navigation-mobile__button-top_close");
        document.getElementById("header-navigation-mobile__button-middle").classList.remove("header-navigation-mobile__button-middle_close");
        document.getElementById("header-navigation-mobile__button-bottom").classList.remove("header-navigation-mobile__button-bottom_close");
    }else{
        document.getElementById("mobile-menu").classList.remove("mobile-menu_inactive");
        document.getElementById("mobile-menu").classList.add("mobile-menu_active");
        document.getElementById("header-navigation-mobile__button-top").classList.add("header-navigation-mobile__button-top_close");
        document.getElementById("header-navigation-mobile__button-middle").classList.add("header-navigation-mobile__button-middle_close");
        document.getElementById("header-navigation-mobile__button-bottom").classList.add("header-navigation-mobile__button-bottom_close");
    }
}
const inPageLinkElements = document.querySelectorAll('a[href^="#"]');
for(let i =0; i < inPageLinkElements.length; i++){
  inPageLinkElement = inPageLinkElements[i];
  inPageLinkElement.addEventListener("click",event => {
    event.preventDefault();
    const speed = 1200;          // スクロールスピード   
    const headerHeight = document.getElementById("header").clientHeight;
    const hrefValue = event.currentTarget.getAttribute('href');
    const targetElement = document.getElementById(hrefValue.replace('#', ''));
    const destinationCoordinates = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    $("html, body").animate({scrollTop:destinationCoordinates}, speed, "swing");
    });
};
document.getElementById("header-navigation-mobile").addEventListener("click",event => {
  event.preventDefault();
  SwitchNavigation();
});
