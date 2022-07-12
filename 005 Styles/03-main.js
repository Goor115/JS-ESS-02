let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let busyDays = ["Monday", "Thursday", "Friday"];

days.forEach(day => {
    let dayElement = document.createElement("div");
    dayElement.textContent = day;

    if(busyDays.indexOf(day) != -1) {
        dayElement.classList.add("busy-day");
    }

    document.body.append(dayElement);
});