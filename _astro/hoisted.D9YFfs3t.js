import"./hoisted.BrsKBBnT.js";function a(e,t){return e<=t.insuficiente?{clase:"bg-[#FFFFFF]",texto:"Insuficiente"}:e<=t.mantenimiento?{clase:"bg-[#E7FFED]",texto:"Mantenimiento"}:e<=t.minEfectivo?{clase:"bg-[#B2DBBC]",texto:"Min efectivo"}:e<=t.maxAdaptativo?{clase:"bg-[#83FF00]",texto:"Max adaptativo"}:e<=t.maxRecuperable?{clase:"bg-[#FFFF00]",texto:"Max recuperable"}:{clase:"bg-[#FF7575]",texto:"No recomendado"}}function m(){const e={Cuadriceps:{serie:parseInt(document.getElementById("NCuadriceps").value),limites:{insuficiente:5,mantenimiento:7,minEfectivo:12,maxAdaptativo:18,maxRecuperable:20}},Isquios:{serie:parseInt(document.getElementById("NIsquios").value),limites:{insuficiente:3,mantenimiento:5,minEfectivo:10,maxAdaptativo:16,maxRecuperable:20}},Gluteos:{serie:parseInt(document.getElementById("NGluteos").value),limites:{insuficiente:3,mantenimiento:3,minEfectivo:4,maxAdaptativo:12,maxRecuperable:16}},Pectoral:{serie:parseInt(document.getElementById("NPectoral").value),limites:{insuficiente:7,mantenimiento:9,minEfectivo:12,maxAdaptativo:20,maxRecuperable:22}},Espalda:{serie:parseInt(document.getElementById("NEspalda").value),limites:{insuficiente:7,mantenimiento:9,minEfectivo:14,maxAdaptativo:22,maxRecuperable:25}},Deltoides:{serie:parseInt(document.getElementById("NDeltoides").value),limites:{insuficiente:6,mantenimiento:8,minEfectivo:10,maxAdaptativo:14,maxRecuperable:18}},Biceps:{serie:parseInt(document.getElementById("NBiceps").value),limites:{insuficiente:6,mantenimiento:8,minEfectivo:10,maxAdaptativo:14,maxRecuperable:20}},Triceps:{serie:parseInt(document.getElementById("NTriceps").value),limites:{insuficiente:6,mantenimiento:8,minEfectivo:10,maxAdaptativo:14,maxRecuperable:20}},Trapecio:{serie:parseInt(document.getElementById("NTrapecio").value),limites:{insuficiente:0,mantenimiento:0,minEfectivo:0,maxAdaptativo:14,maxRecuperable:20}},Gemelos:{serie:parseInt(document.getElementById("NGemelos").value),limites:{insuficiente:6,mantenimiento:8,minEfectivo:15,maxAdaptativo:20,maxRecuperable:25}},Core:{serie:parseInt(document.getElementById("NCore").value),limites:{insuficiente:0,mantenimiento:0,minEfectivo:4,maxAdaptativo:20,maxRecuperable:30}}};console.log("Datos:",e),Object.keys(e).forEach(function(t){const i=a(e[t].serie,e[t].limites);console.log(`Resultado para ${t}:`,i);const n=document.getElementById("R"+t);n&&(n.className=i.clase+" col-span-3 p-2 rounded-lg justify-center grid",n.textContent=i.texto)})}document.querySelectorAll('input[type="number"]').forEach(e=>{e.addEventListener("input",m)});
