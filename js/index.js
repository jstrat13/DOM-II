// Your code goes here


const nav = document.querySelectorAll('a');                          // nav events

nav.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
}));
nav.forEach(item => item.addEventListener('mouseover', (e) => {
    e.preventDefault();
    item.style.fontSize = '3rem';
}));

nav.forEach(item => item.addEventListener('mouseout', (e) => {
    item.style.fontSize = '1.6rem';
}));                                                                  // nav events

const h1 = document.querySelector('h1');

h1.addEventListener('dblclick', (e) => {
    h1.style.color = 'dodgerblue';
});

const btn  = document.querySelectorAll('.btn');                      // btn events

btn.forEach((item) => item.addEventListener('mousedown', (e) => {
    item.style.backgroundColor = 'chartreuse';
}));

btn.forEach((item) => item.addEventListener('mouseup', (e) => {
    item.style.backgroundColor = '#17A2B8';
}));                                                                  // btn events

const pics = document.querySelectorAll('img');
// pics[0].addEventListener('click', () => {
//     pics[0].style.display = 'none';
// });

pics.forEach((item) => item.addEventListener('click', (e) => {
    e.stopPropagation();
    item.style.display = 'none';
}));

const content = document.querySelector('.content-section');
content.addEventListener('click', () => {
    content.style.backgroundColor = 'red';
});
console.log(content)



