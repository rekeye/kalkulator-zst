const pageLinkSend = (e) => {
    const btn = e.target;

    $.ajax({ //wyslanie danych do php za pomoca ajax bazujac na klikniety link
        type:"post",
        url:"php/whichPageSend.php",
        data: {  
            id: btn.id
        },
        cache:false,
        success: () => {
            console.log('data sent');

            location.href = 'form.html';
        }
    });
} 
