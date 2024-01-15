import { classNames, selectors } from './settings.js';

class NavAndFooterVisibility {
  constructor() {
    this.previousScrollPosition = 0;
    this.currentScrollPosition = 0;
    this.getElements();
    this.initActions();
  }

  getElements = () => {
    this.dom = {
      hamburgerTrigger: document.getElementById(selectors.hamburgerTrigger),
      navigation: document.querySelector(selectors.navigation),
      footer: document.querySelector(selectors.footer),
    }
  }

  initActions = () => {
    window.addEventListener('click', event => {
      const hamburgerMenuLinks = document.querySelectorAll(selectors.hamburgerMenuLinks);
      for (let singleMenuLink of hamburgerMenuLinks) {
        if (event.target == singleMenuLink) {
          this.handleCloseHamburgerMenu();
        }
    }
    });
    window.addEventListener('scroll', event => {
      event.preventDefault();
      this.handleNavigationVisibility();
      this.handleFooterVisibility();
    });
  }

  handleCloseHamburgerMenu = () => {
    this.dom.hamburgerTrigger.checked = false;
  }

  handleNavigationVisibility = () => {
    this.currentScrollPosition = window.pageYOffset;
    this.previousScrollPosition - this.currentScrollPosition > 0 ? this.navigationHide() : this.navigationShow();
    this.previousScrollPosition - this.currentScrollPosition < 0 ? this.handleCloseHamburgerMenu() : null;
    this.previousScrollPosition = this.currentScrollPosition;
  }

  navigationShow = () => {
    this.dom.navigation.classList.remove(classNames.navShow);
  }

  navigationHide = () => {
    this.dom.navigation.classList.add(classNames.navShow);
    this.handleCloseHamburgerMenu();
  }

  handleFooterVisibility = () => {
    window.pageYOffset < 25 ? this.footerHide() : this.footerShow();
  }

  footerHide = () => {
    this.dom.footer.classList.remove(classNames.footerShow);
  }

  footerShow = () => {
    this.dom.footer.classList.add(classNames.footerShow);
  }
}

export default NavAndFooterVisibility;

