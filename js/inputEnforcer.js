document.querySelectorAll("input")
        .forEach(el => el.addEventListener('keydown', () => {
            //jezeli wartosc wpisana w input jest wieksza/ mniejsza niz postanowiona, zmieni sie ona do najwiekszej/ najmniejszej
            const max = parseInt(el.max);
            const min = parseInt(el.min);
            if (el.value === "") {
                return;
            } else {
                if (el.value > max) el.value = max;
                if (el.value < min) el.value = min;
            }
        }))