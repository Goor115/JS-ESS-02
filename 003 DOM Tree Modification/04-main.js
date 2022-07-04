let source = [
    {
        month: "Январь",
        amount: 20
    },
    {
        month: "Февраль",
        amount: 140
    },
    {
        month: "Март",
        amount: 115
    },
    {
        month: "Апрель",
        amount: 100
    },
    {
        month: "Март",
        amount: 80
    },
    {
        month: "Июнь",
        amount: 90
    },
    {
        month: "Июль",
        amount: 100
    }
];

function createRow(colum1Text, colum2Text) {
    let tr = document.createElement("tr");
    tr.append(createCell(colum1Text));
    tr.append(createCell(colum2Text));
    return tr;
}

function createCell(text) {
    let td = document.createElement("td");
    td.textContent = text;
    return td;
}

let table = document.createElement("table");

for (const item of source) {
    table.append(createRow(item.amount, item.month));
}

document.body.append(table);