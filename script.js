class App {
  constructor() {
    this.sectionItem = document.querySelectorAll('.nav-link');
    this.navHead = document.querySelector('.nav-head');
    this.hamburger = document.querySelector('.hamburger');
    this.close = document.querySelector('.close');
    this.sidebar = document.querySelector('.sidebar');

    this.init();
  }

  init() {
    this.addScrollToSection();
    this.addMenuMobile();
  }

  addMenuMobile() {
    this.addHamburger();
    this.removeHamburger();
  }

  addHamburger() {
    this.hamburger.addEventListener('click', event => {
      event.currentTarget.classList.add('hamburger--active');
      this.sidebar.classList.add('sidebar--active');
      this.close.classList.add('close--active');
    });
  }

  removeHamburger() {
    this.close.addEventListener('click', event => {
      this.hamburger.classList.remove('hamburger--active');
      this.sidebar.classList.remove('sidebar--active');
      event.currentTarget.classList.remove('close--active');
    });
  }

  addScrollToSection() {
    this.sectionItem.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        this.scrollToSection(item);
      });
    });
  }

  scrollToSection(item) {
    const section = item.getAttribute('href');
    const sectionElement = document.getElementById(`${section.slice(1)}`);

    sectionElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

new App();
