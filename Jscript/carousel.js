const items = document.querySelectorAll('.carousel .list .item img');
const titleElement = document.getElementById('slide-title');
const topicElement = document.getElementById('slide-topic');
const desElement = document.getElementById('slide-des');

let timer;
let currentIndex = 0;

function showSlide(index) {
    if (index < 0 || index >= items.length) return;

    items.forEach((item) => {
        item.classList.remove('show');
    });

    const currentItem = items[index];
    titleElement.textContent = currentItem.getAttribute('data-title');
    topicElement.textContent = currentItem.getAttribute('data-topic');
    desElement.textContent = currentItem.getAttribute('data-des');
    currentItem.classList.add('show');
}

showSlide(currentIndex);

function nextSlide() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;//next
    showSlide(currentIndex);
}

timer = setInterval(nextSlide, 4000);

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(timer); 
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1; // previous
    showSlide(currentIndex);
    timer = setInterval(nextSlide, 4000); 
});

document.getElementById('next').addEventListener('click', () => {
    clearInterval(timer);
    nextSlide(); 
    timer = setInterval(nextSlide, 4000); 
});