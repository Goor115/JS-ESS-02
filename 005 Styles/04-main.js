let trArray = document.querySelectorAll("#statusTable td:nth-child(2)");
for (const tr of trArray) {
    if (tr.textContent < 100) {
        tr.parentElement.classList.add("attention");
    }
}