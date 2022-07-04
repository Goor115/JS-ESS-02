let days = [{ name: "Sunday", isWorkDay: false },
    { name: "Monday", isWorkDay: true },
    { name: "Tuesday", isWorkDay: true },
    { name: "Wednesday", isWorkDay: true },
    { name: "Thursday", isWorkDay: true },
    { name: "Friday", isWorkDay: true },
    { name: "Saturday", isWorkDay: false }];

function p(text) {
    let paragraf = document.createElement("p");
    paragraf.innerHTML = text;
    return paragraf;
}

let work = document.querySelector("#workDay");
let weekend = document.querySelector("#weekend");

for (const day of days) {
    if(day.isWorkDay){
        work.append(p(day.name))
    } else {
        weekend.append(p(day.name))
    }
}