// Получаем элементы
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let circles = document.querySelectorAll('.circles div');
let testimonialContainer = document.querySelector('.otzivi');

// Массив отзывов
let testimonials = [
    {
        image: 'assets/loj.png',
        text: '"StriveCore helped me transform my life!"',
        description: 'StriveCore has completely transformed my fitness journey. The trainers are incredibly knowledgeable, and the state-of-the-art equipment makes every workout exciting and challenging. I’ve never felt more motivated to push myself and achieve my goals. StriveCore isn’t just a gym, it’s a community that truly cares about your success!'
    },
    {
        image: 'assets/loj2.png',
        text: '"StriveCore is amazing!"',
        description: 'Another great testimonial about StriveCore.'
    },
    {
        image: 'assets/loj3.png',
        text: '"I love StriveCore!"',
        description: 'Yet another testimonial.'
    },
    {
        image: 'assets/loj4.png',
        text: '"StriveCore is the best!"',
        description: 'One more testimonial.'
    },
    {
        image: 'assets/loj5.png',
        text: '"StriveCore changed my life!"',
        description: 'And one more.'
    }
];

// Текущий отзыв
let currentTestimonial = 0;

// Обработчик клика на точки
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonial();
    });
});

// Обработчики клика на стрелки
left.addEventListener('click', () => {
    currentTestimonial--;
    if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
    updateTestimonial();
});

right.addEventListener('click', () => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
    updateTestimonial();
});

// Функция обновления отзыва
function updateTestimonial() {
    let testimonial = testimonials[currentTestimonial];
    document.querySelector('.loj').src = testimonial.image;
    document.querySelector('.helped').textContent = testimonial.text;
    document.querySelector('.podhelped').textContent = testimonial.description;

    // Обновляем активную точку
    circles.forEach((circle, index) => {
        circle.classList.remove('active');
        if (index === currentTestimonial) {
            circle.classList.add('active');
            circle.style.backgroundColor = '#FF6C2E'; // Оранжевый цвет для активной точки
        } else {
            circle.style.backgroundColor = '#D9D9D9'; // Серый цвет для неактивных точек
        }
    });
}
