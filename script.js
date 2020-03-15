//HEADER
let menuElements = document.querySelectorAll(".navigation_list > li > a");
for (let element of menuElements) {
    element.onclick = function (e) {
        e.target.classList.add('colored');
        for (element of menuElements){
            if (element != e.target) element.classList.remove('colored');
        }
}
}
//SLIDER
let arrows = document.querySelectorAll(".arrow");
let slide1 = document.querySelector(".slide_1");
let slide2 = document.querySelector(".slide_2");
let visible = true;
for (arrow of arrows) {
    arrow.onclick = function () {
        visible = !visible;
        if (visible) {
            slide2.style.display = 'none';
            slide1.style.display = 'flex';
        } else {
            slide1.style.display = 'none';
            slide2.style.display = 'block';
        }
        
    }
}

//SLIDER DISPLAYS in PHONES

let buttonLeft = document.querySelector(".button1");
let buttonRight = document.querySelector(".button2");
let displayLeft = document.querySelector(".vertical_image");
let displayRight = document.querySelector(".horisontal_image");
let displayLeftOn = true;
let displayRightOn = true;

buttonLeft.onclick = function () {
    if (displayLeftOn) {
        displayLeft.style.opacity = 0;
    } else {
        displayLeft.style.opacity = 1 ;
    }
    displayLeftOn = !displayLeftOn;
}

buttonRight.onclick = function () {
    if (displayRightOn) {
        displayRight.style.opacity = 0;
    } else {
        displayRight.style.opacity = 1;
    }
    displayRightOn = !displayRightOn;
}

//Portfolio, tabs

let picturesOptions = document.querySelectorAll('.pictures_options > p');
let portfolioImages = document.querySelectorAll('.picture')
for (let element of picturesOptions) {
    element.onclick = function (e) {
        e.target.classList.add('selected');
            for(let image of portfolioImages) {
                image.style.order = Math.round(Math.random(12)*10);
            }
        for (let element of picturesOptions){
            if (element != e.target) element.classList.remove('selected');
        }
}
}

//Portfolio, border
for (let image of portfolioImages) {
    console.log(image);
    image.onclick = function (e) {
        if (image.classList.contains('active_picture')){
            image.classList.remove('active_picture');
        } else {
            image.classList.add('active_picture');
        }
        
        for (let image of portfolioImages) {
            if (image != e.target) image.classList.remove('active_picture');
        }
    }
}
