import $ from 'jquery';
class MobileMenu
{
    constructor()
    {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
        /*$(".site-header__menu-icon").click(function()
        {
            console.log("funcionaboton");
        });*/
    }


    events()
    {
        this.menuIcon.click(this.toggleTheMenu.bind(this) );
    }


    toggleTheMenu()
    {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
        //console.log("the icon was clicked");
    }


}

export default MobileMenu;