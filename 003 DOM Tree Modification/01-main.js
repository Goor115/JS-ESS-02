let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let out = document.querySelector("#output");

for (let i = 0; i < days.length; i++) {
    const day = days[i];
    let p = document.createElement("p");
    p.textContent = day;
    out.append(p);
}