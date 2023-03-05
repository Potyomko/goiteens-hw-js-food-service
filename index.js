const foodRef = document.querySelector(".js-gallery")
const markup = galleryItemTpl(food)
foodRef.insertAdjacentHTML('beforeend', markup)
const switcher = document.querySelector(".theme-switch__toggle")
switcher.addEventListener('change', switcherCheced )
const theme = localStorage.getItem('currentTheme'); 
function switcherCheced () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
const value = document.body.classList;
console.log(value);
localStorage.setItem('currentTheme',value[1])
}
    if(theme === null){
        localStorage.setItem('currentTheme', 'light-theme');
        document.body.classList.add('light-theme')
       
    } else
{
    document.body.classList.add(theme);
};
if (theme === 'dark-theme') {
    switcher.checked = true;
};