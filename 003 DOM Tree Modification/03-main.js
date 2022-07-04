let table = document.querySelectorAll("td:nth-child(2)");

for (const td of table) {
    if(td.textContent < 100) {
        td.parentElement.remove();
    }
}