//wyswietlenie przycisku powrotu do gory strony kiedy przescrollujemy w dol
const topBtnVisibility = (position) => {
    const topBtn = document.getElementById('topBtn');
    if(position>document.documentElement.clientHeight-200 && position<document.documentElement.clientHeight*2.75) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
}