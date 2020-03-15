let menuElements = document.querySelectorAll(".navigation_list > li > a");
for (element of menuElements) {
    element.onclick = function (e) {
        e.target.classList.add('colored');
        for (element of menuElements){
            if (element != e.target) element.classList.remove('colored');
        }
}
}

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