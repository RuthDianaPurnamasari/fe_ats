import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-atsruth2024-e7b20d58134d.herokuapp.com/penelitian";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}