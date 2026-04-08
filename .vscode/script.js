// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// efek menu bar diklik
document.querySelector('#align-justify').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav
const align = document.querySelector('#align-justify');

document.addEventListener('click', function(e) {
    if(!align.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});