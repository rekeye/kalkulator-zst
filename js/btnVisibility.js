//wyswietlenie przycisku powrotu do gory strony kiedy przescrollujemy w dol
const topBtn = document.getElementById('topBtn');
const topBtnVisibility = (position) => {
    if(position>document.documentElement.clientHeight-200 && position<document.documentElement.clientHeight*2.75) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
}

window.addEventListener('scroll', (e) => {
    scroll_position = window.scrollY;
    topBtnVisibility(scroll_position);
});