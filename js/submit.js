//stworzenie globalnych tabeli
let grades = [], test = [], achievs = [] ;

const submit = (e) => {
    e.preventDefault(); //formularz nie odswieza strony

    const form = e.path[1];
    const inputs = Array.from(form.querySelectorAll('input')); //wyciagniecie tablicy z inputow w formularzu
    switch(inputs[0].name) {
        case 'grades-0':
            grades = inputs.map(el => el.value); //wrzuca nowe dane do tabeli

            console.log('grades set: ', grades);
            break;
        case 'test-0':
            test = inputs.map(el => el.value); //wrzuca nowe dane do tabeli

            console.log('test set: ', test);
            break;
        case 'radio':
            const inputValues = inputs.map(el => {
                if(el.type==='radio' || el.type==='checkbox') {
                    if(el.checked) return el.value;
                    return '0';
                } else {
                    return el.value;
                }
            }); //wrzuca nowe dane do tabeli

            const selects = Array.from(form.querySelectorAll('select'));
            const selectValues = selects.map(el => el.value);

            achievs = [...inputValues, ...selectValues];

            console.log('achievs set: ', achievs);
            break;
    }

    if (grades.length>0 && test.length>0 && achievs.length>0) //jezeli kazda tablica otrzymala swoje wartosci
        $.ajax({ //wyslanie danych do php za pomoca ajax
            type:"post",
            url:"php/countGrades.php",
            data: {  
                'grades': grades,
                'achievs' : achievs,
                'test': test
            },
            cache:false,
            success: (response) => {
                console.log('data received: ', response)
                $('#score').html(`${response} /200`);
            }
        });

    window.scrollBy({
        top: document.documentElement.clientHeight,
        behavior: 'smooth'
    })
}
