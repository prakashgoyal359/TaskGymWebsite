let icon = document.querySelector(".icon");
let ul = document.querySelector("ul")

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");

    if(ul.className == "showData")
    {
        document.getElementById("bar").className="fa-solid fa-xmark"
    }
    else
    {
        document.getElementById("bar").className="fa-solid fa-bars"
    }
})

// pop up form 
document.getElementById('joinUsBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
};

// slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = (index) => {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    document.querySelector('.slider-container').style.transform = `translateX(-${slideIndex * 100}%)`;
};

const changeSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
};

const autoSlide = () => {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoSlide, 3000);
};

autoSlide();
