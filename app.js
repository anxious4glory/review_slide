const reviews = [
    {
        id: 1,
        name: "Thomas Thanos",
        job: "web developer",
        img: src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        text: 
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas, Fusce bibendum urna consectetur, consectetur eros non, facilisis sapien. Donec tempus vehicula tellus ac molestie",
    },
    {
        id: 2,
        name: "Sarah BlackWidow",
        job: "web designer",
        img: src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        text: 
        "Praesent ac elementum enim. Etiam tempor scelerisque neque, id luctus velit consectetur a. Cras scelerisque nisi sed odio mollis, sit amet malesuada tellus imperdiet.",
    },
    {
        id: 3,
        name: "Captain Philip",
        job: "back-end developer",
        img: src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        text: 
        "Quisque convallis lectus justo, nec pharetra neque ornare sed. Aliquam lacinia nibh ac velit hendrerit pretium commodo at libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec facilisis accumsan dui, a pretium erat cursus sed. Aliquam euismod massa arcu, id feugiat leo viverra in.",
    },
    {
        id: 4,
        name: "Diana Wonder",
        job: "dev ops",
        img: src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        text: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis velit non nisl ornare tristique eget in tellus. Nullam consequat placerat porta. Mauris tempus pretium metus, in posuere metus ultrices eu.",
    },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//set starting item
let startingItem = 0;

//load starting Item
window.addEventListener('DOMContentLoaded', () => {
    showSlide(startingItem)
})

//show first slide
function showSlide (firstSlide) {
    const item = reviews[firstSlide];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next slide
prevBtn.addEventListener('click', () => {
    startingItem--
    if (startingItem < 0) {
            startingItem = reviews.length -1;
    }
    showSlide(startingItem);
})
nextBtn.addEventListener('click', () => {
    startingItem++
    if (startingItem > reviews.length - 1) {
            startingItem = 0;
    }
    showSlide(startingItem);
})