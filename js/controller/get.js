
import { isiTabel } from "../temp/table.js";

export function isiTablePresensi(results) {
    clearTable();
    results.forEach(isiRow);
    console.log(results);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#JUDUL#", value.Judul)
            .replace("#INSTITUSI#", value.Institusi)
            .replace("#BIDANGSTUDI#", value.Bidang_Studi)
            .replace("#PENULIS#", value.Penulis)
            .replace("#CATEGORY#", value.Category)
            .replace("#RINGKASAN#", value.Ringkasan);
        
        
            const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        // Create a new row element
        let newRow = document.createElement('tr');
        newRow.innerHTML = content; // Set content to the new row
        tableBody.appendChild(newRow); // Append the new row to the tbody
    }
}

function clearTable() {
    const tableBody = document.querySelector('#iniTabel tbody');
    if (tableBody) {
        tableBody.innerHTML = ''; // Clear the inner HTML of the tbody
    }
}