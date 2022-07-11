let user = {
    firstName: "Jhon",
    lastName: "Doe",
    age: "25",
}
let test = {
    prop1: "1111",
    prop2: "2222",
}

function bindProperties(obj) {

    for (const propName in obj) {
        if (Object.hasOwnProperty.call(obj, propName)) {
            const value = obj[propName];
            const element = document.querySelector(`[data-bind="${propName}"]`);
            element.textContent = value;
        }
    }
}

bindProperties(user);
bindProperties(test);