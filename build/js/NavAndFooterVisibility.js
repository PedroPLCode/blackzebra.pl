import { classNames, selectors, settings } from './settings.js';

class NavAndFooterVisibility {
  constructor() {
    this.previousScrollPosition = 0;
    this.currentScrollPosition = 0;
    this.navCanBeVisible = true;
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
          this.navCanBeVisible = false;
          this.handleCloseHamburgerMenu();
        }
    }
    });
    window.addEventListener('scroll', async event => {
      event.preventDefault();
      this.handleNavigationVisibility();
      this.handleFooterVisibility();
      await this.sleep(settings.delay);
      this.navCanBeVisible ? null : this.navigationHide();
      await this.sleep(settings.delay);
      this.navCanBeVisible = true;
    });
  }

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleCloseHamburgerMenu = () => {
    this.dom.hamburgerTrigger.checked = false;
  }

  handleNavigationVisibility = () => {
    this.currentScrollPosition = window.pageYOffset;
    this.previousScrollPosition - this.currentScrollPosition > 0 ? this.navigationShow() : this.navigationHide();
    this.previousScrollPosition - this.currentScrollPosition < 0 ? this.handleCloseHamburgerMenu() : null;
    this.previousScrollPosition = this.currentScrollPosition;
  }

  navigationShow = () => {
    this.navCanBeVisible ? this.dom.navigation.classList.add(classNames.navShow) : null;
  }

  navigationHide = () => {
    this.dom.navigation.classList.remove(classNames.navShow);
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
