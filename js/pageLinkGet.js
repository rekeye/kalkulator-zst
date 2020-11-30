const pageLinkGet = () => {
    //zdobycie informacji do wyswietlenia na stronie bazujac na wczesniej wyslanych informacjach
    $.ajax({
        type:"get",
        url:"php/whichPageGet.php",
        cache:false,
        success: (response) => {
            console.log('data received: ', response);

            const pageData = JSON.parse(response);

            const title = document.getElementById('title');
            const grades0 = document.getElementById('grades-label-2');
            const grades1 = document.getElementById('grades-label-3');

            title.innerHTML = pageData[0];
            grades0.innerHTML = pageData[1];
            grades1.innerHTML = pageData[2];
        }
    });
} 