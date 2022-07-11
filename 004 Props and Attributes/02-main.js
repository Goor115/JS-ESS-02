function getSumOfAttributes(attributeName) {
    let sum = 0;

    let elements = document.querySelectorAll("[" + attributeName + "]");

    for (const element of elements) {
        const attrValue = element.getAttribute(attributeName);
        sum += Number(attrValue);
    }

    return sum;
}

let total = 0;
total += getSumOfAttributes("my-attribute");
total += getSumOfAttributes("data-value");

console.log(total);