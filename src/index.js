import './styles.css';
import gridInfo from './menu.json';
import gridTpl from './templates/grid.hbs';

const markup = gridTpl(gridInfo);
const cards = document.querySelector('.js-menu');
cards.innerHTML = markup;
const switchBtn = document.querySelector('#theme-switch-toggle');
const THEMES = {
  light: 'light-theme',
  dark: 'dark-theme',
};
switchBtn.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add(THEMES.dark);
    document.body.classList.remove(THEMES.light);
  } else {
    document.body.classList.remove(THEMES.dark);
    document.body.classList.add(THEMES.light);
  }
  if (document.body.classList.contains(THEMES.dark)) {
    localStorage.setItem('theme', THEMES.dark);
  } else {
    localStorage.setItem('theme', THEMES.light);
  }
});
const memory = localStorage.getItem('theme');

if (memory === THEMES.light) {
  document.body.classList.add(THEMES.light);
} else {
  document.body.classList.add(THEMES.dark);
  switchBtn.checked = true;
}
