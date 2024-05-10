import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://ws-atsruth2024-e7b20d58134d.herokuapp.com/penelitian";
get(urlAPI,isiTablePenelitian);
function isiTablePenelitian(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}