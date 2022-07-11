let elements = document.querySelectorAll("[data-color]");

for (const element of elements) {
    element.style.color = element.dataset.color;
}