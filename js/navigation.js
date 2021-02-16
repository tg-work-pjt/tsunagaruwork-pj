class SwitchNavigation{
  constructor(){
      this.object= {};
      this.object.button = document.getElementById("header-navigation-mobile")
      this.object.menu = document.getElementById("mobile-menu")
      this.eventType = window.ontouchstart ? 'touchstart':'click';
      this. _addEventListeners();
  }
  _toggle(){
      this.object.button.classList.toggle("navigation-mobile-menu_open")
      this.object.menu.classList.toggle("mobile-menu_active")
  }
  _toggleInactiveStyle(){
    //初回にmobile-menu_inactiveをhtmlに付与したままだと、ページ表示時にメニューが消えるアニメーションが見えてしまうため、
    //toggleとは別途実装する。
    let isMenuActive = document.getElementById("mobile-menu").classList.contains("mobile-menu_active");
    if(isMenuActive){
      document.getElementById("mobile-menu").classList.remove("mobile-menu_inactive");
    }else{
        document.getElementById("mobile-menu").classList.add("mobile-menu_inactive");
    }
  }
  _addEventListeners(){
      this.object.button.addEventListener(this.eventType,()=>{this._toggle()})
      this.object.button.addEventListener(this.eventType,()=>{this._toggleInactiveStyle()})
  }
}
// インスタンス化
const switchNavigationObject = new SwitchNavigation(); 
const inPageLinkElements = document.querySelectorAll('a[href^="#"]');
inPageLinkElements.forEach(inPageLinkElement => {
  inPageLinkElement.addEventListener("click",event => {
    event.preventDefault();
    // スクロールスピード   
    const speed = 1200;          
    const headerHeight = document.getElementById("header").clientHeight;
    const hrefValue = event.currentTarget.getAttribute('href');
    const targetElement = document.getElementById(hrefValue.replace('#', ''));
    const destinationCoordinates = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    $("html, body").animate({scrollTop:destinationCoordinates}, speed, "swing");
    });
});

const mobileMenuList = document.getElementById("mobile-menu-list").children;
Array.prototype.forEach.call(mobileMenuList, function(mobileMenuItem) {
  mobileMenuItem.firstElementChild.addEventListener(switchNavigationObject.eventType,() => {
  switchNavigationObject._toggle();
  switchNavigationObject._toggleInactiveStyle();
  });
})