const openBurger = 'burger__menu__open';
const closeBurger = 'burger__menu__close';
const burgerMenuId = 'burger-menu'

let active = false;


const onBurgerClick = () => {
   active = !active;
   let burgerMenu = document.getElementById(burgerMenuId);
   burgerMenu.classList = active ? openBurger : closeBurger;
}