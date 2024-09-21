const slides = document.querySelectorAll('.slides img');
let slideindex = 0;
let IntervalId = null;

// InitializeSlider()
document.addEventListener('DOMContentLoaded', InitializeSlider())

function InitializeSlider(){

    if(slides.length > 0){
        
        slides[slideindex].classList.add('displayslide');
        IntervalId = setInterval(Nextslide , 4000)

    }

}

function showSlide(index){

    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove('displayslide')
    });
    slides[slideindex].classList.add('displayslide')
}

function Prevslide(){
    clearInterval(IntervalId);
    slideindex--;
    showSlide(slideindex);
}

function Nextslide(){
    slideindex++;
    showSlide(slideindex)
}
