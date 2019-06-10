// Your code goes here
const nav = document.querySelectorAll('a');
console.log(nav);

nav.forEach(item => item.addEventListener('mouseover', (e) => {
    item.style.fontSize = '3rem';
}));

nav.forEach(item => item.addEventListener('mouseout', (e) => {
    item.style.fontSize = '1.6rem';
}));