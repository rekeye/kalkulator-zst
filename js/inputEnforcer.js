document.querySelectorAll("input").forEach(el => el.addEventListener('keyup', () => {
    const max = parseInt(el.max);
    const min = parseInt(el.min);
    if (el.value > max) el.value = max;
    if (el.value < min) el.value = min;
}))