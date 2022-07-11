let elements = document.querySelectorAll("[data-status]");

function changeStatus(element) {
    let border = "";

    // switch (element.dataset.status) {
    //     case "completed":
    //         border = "1px solid green";
    //         break;
    //     case "expired":
    //         border = "1px solid red";
    //         break;
    // }

    if (element.dataset.status == 'completed') {
        border = "1px solid green"
    } else if (element.dataset.status == 'expired') {
        border = "1px solid red"
    }

    element.style.border = border;
}

for (const elemtnt of elements) {
    changeStatus(elemtnt);
}