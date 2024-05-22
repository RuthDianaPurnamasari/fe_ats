import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePenelitian(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    let content =
    isiTabel.replace("#ID#", value._id || "")
            .replace("#IDD#", value._id || "")
            .replace("#JUDUL#", value.judul || "")
            .replace("#INSTITUSI#", value.institusi || "")
            .replace("#PENULIS#", value.penulis || "")
            .replace("#PENULISS#", value.penulis || "")
            .replace("#DATETIME#", value.datetime || "")
            .replace("#RINGKASAN#", value.ringkasan || "");
    addInner("iniTabel", content);
}