document.querySelectorAll("input").forEach(el => el.addEventListener('keydown', () => {
    const max = parseInt(el.max);
    const min = parseInt(el.min);
    if (el.value === "") {
        return;
    } else {
        if (el.value > max) el.value = max;
        if (el.value < min) el.value = min;
    }
}))