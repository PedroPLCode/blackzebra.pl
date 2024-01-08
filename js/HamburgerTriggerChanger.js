import { selectors } from './settings.js';

class HamburgerTriggerChanger {
  constructor() {
    this.getElements();
    this.initActions();
  }

  getElements = () => {
    this.dom = {
      hamburgerTrigger: document.getElementById(selectors.hamburgerTrigger),
    }
  }

  initActions = () => {
    this.dom.hamburgerTrigger.addEventListener('click', () => {
      this.handleHamburgerTriggerClick();
    })
  }

  handleHamburgerTriggerClick = () => {
    const hamburgerMenuLinks = document.querySelectorAll(selectors.hamburgerMenuLinks);
    for (let singleMenuLink of hamburgerMenuLinks) {
      singleMenuLink.addEventListener('click', () => {
        this.handleCloseHamburgerMenu();
      })
    }
  }

  handleCloseHamburgerMenu = () => {
    this.dom.hamburgerTrigger.checked = false;
  }
}

export default HamburgerTriggerChanger;
