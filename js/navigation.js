class SwitchNavigation{
  constructor(){
      this.object= {};
      this.object.button = document.querySelector("#header-navigation-mobile")
      this.object.menu = document.querySelector("#mobile-menu")
      this.eventType = window.ontouchstart ? 'touchstart':'click';
      this.object.inPageLinkElements = document.querySelectorAll('a[href^="#"]');
      this.mobileMenuItems = document.querySelectorAll(".mobile-menu-item");
      this.mobileMenuItemsArray= [...this.mobileMenuItems];
      this. _addEventListeners();
  }
  _toggle(){
      this.object.button.classList.toggle("navigation-mobile-menu_open")
      this.object.menu.classList.toggle("mobile-menu_active")
  }
  _toggleInactiveStyle(){
    //初回にmobile-menu_inactiveをhtmlに付与したままだと、ページ表示時にメニューが消えるアニメーションが見えてしまうため、
    //toggleとは別途実装する。
    let isMenuActive = this.object.menu.classList.contains("mobile-menu_active");
    if(isMenuActive){
      this.object.menu.classList.remove("mobile-menu_inactive");
    }else{
      this.object.menu.classList.add("mobile-menu_inactive");
    }
  }
  _addEventListeners(){
      this.object.button.addEventListener(this.eventType,()=>{this._toggle()})
      this.object.button.addEventListener(this.eventType,()=>{this._toggleInactiveStyle()})
  }
}

// インスタンス化
const switchNavigation = new SwitchNavigation(); 
switchNavigation.object.inPageLinkElements.forEach(inPageLinkElement => {
      inPageLinkElement.addEventListener(switchNavigation.eventType,event => {
      SmoothScroll(event)
    });
});

function SmoothScroll(event){
  event.preventDefault();
  // スクロールスピード
  const speed = 1200;
  const headerHeight = document.querySelector("#header").clientHeight;
  const hrefValue = event.currentTarget.getAttribute("href");
  const targetElement = document.getElementById(hrefValue.replace("#", ""));
  const destinationCoordinates = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  $("html, body").animate({scrollTop:destinationCoordinates}, speed, "swing");
}

switchNavigation.mobileMenuItemsArray.forEach(inPageLinkElement => {
  inPageLinkElement.addEventListener(switchNavigation.eventType,() => {
  switchNavigation._toggle();
  switchNavigation._toggleInactiveStyle();
  });
})