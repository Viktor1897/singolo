let menuElements = document.querySelectorAll(".navigation_list > li > a");
for (element of menuElements) {
    element.onclick = function (e) {
        e.target.classList.add('colored');
        for (element of menuElements){
            if (element != e.target) element.classList.remove('colored');
        }
}
}