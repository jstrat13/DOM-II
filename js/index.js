// Your code goes here
const nav = document.querySelectorAll('a');                          // nav events


nav.forEach(item => item.addEventListener('mouseover', (e) => {
    item.style.fontSize = '3rem';
}));

nav.forEach(item => item.addEventListener('mouseout', (e) => {
    item.style.fontSize = '1.6rem';
}));                                                                  // nav events

const h1 = document.querySelector('h1');

h1.addEventListener('dblclick', (e) => {
    h1.style.color = 'dodgerblue';
});

const btn  = document.querySelectorAll('.btn');

btn.forEach(item => item.addEventListener('mousedown', (e) => {
    item.style.backgroundColor = 'chartreuse';
}));

btn.forEach(item => item.addEventListener('mouseover', (e) => {
    item.style.fontColor = 'white';
}));

btn.forEach(item => item.addEventListener('mouseup', (e) => {
    item.style.backgroundColor = '#17A2B8';
}));





console.log(btn);