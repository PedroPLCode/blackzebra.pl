import NavAndFooterHider from './NavAndFooterHider.js';
import HamburgerTriggerChanger from './HamburgerTriggerChanger.js';


export const app = {
  init: function() {
    this.hamburgerTriggerChanger = new HamburgerTriggerChanger();
    this.navAndFooterHider = new NavAndFooterHider();
  }
}

app.init();
