const leftBut = document.getElementById('left-slide').addEventListener('click', () => plusSlid(-1));
const rightBut = document.getElementById('right-slide').addEventListener('click', () => plusSlid(1));
let slideIndex = 1;

showSlid(slideIndex);

function plusSlid(number) {
    showSlid(slideIndex += number);
}

function showSlid(number) {
    let slide = document.getElementsByClassName("slide");
    if (number > slide.length) {
        slideIndex = 1;
    }    
    if (number < 1) {
        slideIndex = slide.length;
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
    }
    slide[slideIndex - 1].style.display = "block";  
}