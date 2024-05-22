import { isiTabel } from "../temp/table.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
    console.log(results);
}

function isiRow(rowData) {

    const dataObject = rowData.reduce((obj, item) => {
        obj[item.Key] = item.Value;
        return obj;
    }, {});

    let content = 
    isiTabel.replace("#ID#", dataObject._id || '')
            .replace("#IDD#", dataObject._id || '')
            .replace("#JUDUL#", dataObject.judul || '')
            .replace("#INSTITUSI#", dataObject.institusi || '')
            .replace("#PENULIS#", dataObject.penulis || '')
            .replace("#PENULISS#", dataObject.penulis || '')
            .replace("#DATETIME#", dataObject.datetime || '')
            .replace("#RINGKASAN#", dataObject.ringkasan || '')
            
    const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = content;
        tableBody.appendChild(newRow);
    }
}

function clearTable() {
    const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        tableBody.innerHTML = '';
    }
}
