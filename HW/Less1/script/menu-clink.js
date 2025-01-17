const menu = document.getElementById("header-menu");
const button = document.getElementById("get-menu");
const onToggleMenuHandler = () => menu.classList.toggle("header__menu--active");

button.addEventListener("click", onToggleMenuHandler);
