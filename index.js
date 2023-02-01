"use strict";
let diasSetmana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let mesesDelAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosot', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let escribirAnyo = document.getElementById('anyo');
let escribirMes = document.getElementById('mes');
let generarDias = document.getElementById('dias');
let numDias = document.getElementById('numsDias');
let listaComentarios = document.getElementById('listaDeComentarios');
let cosasDate = new Date();
let anyo = cosasDate.getFullYear();
let mes = cosasDate.getMonth(); 1
let ultimoMesAnterior = new Date(anyo, mes - 2, 0).getDate();
let anyoActual = cosasDate.getFullYear();
let ultimo = new Date(anyo, mes + 1, 0);
let primero = new Date(anyo, mes, 1);
const DIAS = 7;
const LINEAS = 6;
let cont = 1;
let contDespues = 1;
let contDias = 0
let primeraSetmana = primero.getDay();
if (primeraSetmana == 0) {
    primeraSetmana = 7;
}
if (localStorage.getItem('festiusAnuals') === null || localStorage.getItem('festiusFixes') === null) {
    guardarLosFestiusAunals();
}
ultimoMesAnterior = ultimoMesAnterior - primeraSetmana + 2;
generarDiasSetmana();
generarNumerosCaledario();
marcarDiasConComentarios();
marcarLosDiasQueTienenFestivo()
function generarDiasSetmana() {
    for (let i = 0; i < DIAS; i++) {
        generarDias.innerHTML += '<div>' + diasSetmana[i] + '</div>';
    }
}
function generarMesAnterior() {
    if (mes > 0) {
        numDias.innerHTML = "";
        mes = mes - 1;
        console.log(mes);
        ultimo = new Date(anyo, mes + 1, 0);
        primero = new Date(anyo, mes, 1);
        primeraSetmana = primero.getDay();
        if (primeraSetmana == 0) {
            primeraSetmana = 7;
        }
        cont = 1;
        contDespues = 1;
        ultimoMesAnterior = new Date(anyo, mes - 2, 0).getDate();
        ultimoMesAnterior = ultimoMesAnterior - primeraSetmana + 2;
        generarNumerosCaledario();
        marcarDiasConComentarios();
        marcarLosDiasQueTienenFestivo()
        escribirMes.innerHTML = mesesDelAnyo[mes];
    } else {
        mes = 11;
        anyo = anyo - 1;
        numDias.innerHTML = "";
        console.log(mes);
        ultimo = new Date(anyo, mes + 1, 0);
        primero = new Date(anyo, mes, 1);
        primeraSetmana = primero.getDay();
        if (primeraSetmana == 0) {
            primeraSetmana = 7;
        }
        cont = 1;
        contDespues = 1;
        ultimoMesAnterior = new Date(anyo, mes - 2, 0).getDate();
        ultimoMesAnterior = ultimoMesAnterior - primeraSetmana + 2;
        generarNumerosCaledario();
        marcarDiasConComentarios();
        marcarLosDiasQueTienenFestivo()
        escribirMes.innerHTML = mesesDelAnyo[mes];
        escribirAnyo.innerHTML = anyo;
        console.log(anyo);
    }
}
function generarMesSiguiente() {
    if (mes < 11) {
        numDias.innerHTML = "";
        mes = mes + 1;
        console.log(mes);
        ultimo = new Date(anyo, mes + 1, 0);
        primero = new Date(anyo, mes, 1);
        primeraSetmana = primero.getDay();
        if (primeraSetmana == 0) {
            primeraSetmana = 7;
        }
        cont = 1;
        contDespues = 1;
        ultimoMesAnterior = new Date(anyo, mes - 2, 0).getDate();
        ultimoMesAnterior = ultimoMesAnterior - primeraSetmana + 2;
        generarNumerosCaledario();
        marcarDiasConComentarios();
        marcarLosDiasQueTienenFestivo()
        escribirMes.innerHTML = mesesDelAnyo[mes];
    } else {
        numDias.innerHTML = "";
        mes = 0;
        anyo = anyo + 1;
        console.log(mes);
        ultimo = new Date(anyo, mes + 1, 0);
        primero = new Date(anyo, mes, 1);
        primeraSetmana = primero.getDay();
        if (primeraSetmana == 0) {
            primeraSetmana = 7;
        }
        cont = 1;
        contDespues = 1;
        ultimoMesAnterior = new Date(anyo, mes - 2, 0).getDate();
        ultimoMesAnterior = ultimoMesAnterior - primeraSetmana + 2;
        generarNumerosCaledario();
        marcarDiasConComentarios();
        marcarLosDiasQueTienenFestivo()
        escribirMes.innerHTML = mesesDelAnyo[mes];
        escribirAnyo.innerHTML = anyo;
    }
}
function generarNumerosCaledario() {
    escribirMes.innerHTML = mesesDelAnyo[mes];
    escribirAnyo.innerHTML = anyo;
    for (let i = 0; i < LINEAS; i++) {
        for (let j = 0; j < DIAS; j++) {
            if (primeraSetmana - 1 > 0) {
                if (j == 6) {
                    let mesString = (mes + 1).toString().padStart(2, '0');
                    let diaString = ultimoMesAnterior.toString().padStart(2, '0');
                    let idDia = anyo + mesString + diaString;
                    numDias.innerHTML += '<div class="diasCalendario sabadoDomingo disQueNoSon" id="' + idDia + '" onclick="mostrarLosComentarios(this)">' + ultimoMesAnterior + '</div>';
                    ultimoMesAnterior++;
                    primeraSetmana--;
                } else {
                    let mesString = (mes + 1).toString().padStart(2, '0');
                    let diaString = ultimoMesAnterior.toString().padStart(2, '0');
                    let idDia = anyo + mesString + diaString;
                    numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon disQueNoSon" id="' + idDia + '" onclick="mostrarLosComentarios(this)">' + ultimoMesAnterior + '</div>';
                    ultimoMesAnterior++;
                    primeraSetmana--;
                }
            } else {
                if (j == 5 || j == 6) {
                    let mesString = (mes + 1).toString().padStart(2, '0');
                    let diaString = cont.toString().padStart(2, '0');
                    let idDia = anyo + mesString + diaString;
                    if (cont <= ultimo.getDate()) {
                        numDias.innerHTML += '<div class="diasCalendario sabadoDomingo" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + cont + ');mostrarLosComentarios(this)">' + cont + '</div>';
                        cont++;
                    } else {
                        let mesString = (mes + 1).toString().padStart(2, '0');
                        let diaString = contDespues.toString().padStart(2, '0');
                        let idDia = anyo + mesString + diaString;
                        numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon disQueNoSon" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + contDespues + ');mostrarLosComentarios(this)">' + contDespues + ' </div>';
                        contDespues++;
                    }
                } else {
                    if (cont <= ultimo.getDate()) {
                        let mesString = (mes + 1).toString().padStart(2, '0');
                        let diaString = cont.toString().padStart(2, '0');
                        let idDia = anyo + mesString + diaString;
                        numDias.innerHTML += '<div class="diasCalendario" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + cont + ');mostrarLosComentarios(this)">' + cont + ' </div>';
                        cont++;
                    } else {
                        let mesString = (mes + 2).toString().padStart(2, '0');
                        let diaString = contDespues.toString().padStart(2, '0');
                        let idDia = anyo + mesString + diaString;
                        numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon disQueNoSon" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + contDespues + ');mostrarLosComentarios(this)">' + contDespues + ' </div>';
                        contDespues++;
                    }
                }
            }

        }
        numDias.innerHTML += '<br>';
    }
}
function guardadCosasEnLosDias(contRebut) {
    let textoAGuarda = prompt('Comentario:')
    if (textoAGuarda != null && textoAGuarda != '') {
        let dia = contRebut;
        let mesString = (mes + 1).toString().padStart(2, '0');
        let diaString = dia.toString().padStart(2, '0');
        let idDia = anyo + mesString + diaString;
        let comentario = {
            idDia,
            textoAGuarda
        };
        if (typeof (Storage) !== "undefined") {
            // LocalStorage disponible
            if (localStorage.getItem('cositas') === null) {
                let comentarios = [];
                comentarios.push(comentario)
                localStorage.setItem('cositas', JSON.stringify(comentarios));
            } else {
                let comentarios = JSON.parse(localStorage.getItem('cositas'));
                comentarios.push(comentario);
                localStorage.setItem('cositas', JSON.stringify(comentarios))
            }
        } else {
            // LocalStorage no soportado en este navegador
            alert('Tu navegador no permite localStorage');
        }
    }
    marcarDiasConComentarios();
}
function mostrarLosComentarios(objectRebut) {
    let id = objectRebut.id;
    let comentariosDeLosDias = localStorage.getItem("cositas");
    let diasFestivosAnueales=localStorage.getItem("festiusAnuals");
    let diasFestivosFix=localStorage.getItem("festiusFixes");
    let comentarioParaEscribir = JSON.parse(comentariosDeLosDias);
    let comentarioDiaFestivo=JSON.parse(diasFestivosAnueales);
    let comentarioDiaFestivoFix=JSON.parse(diasFestivosFix);
    listaComentarios.innerHTML = "";
    let anyo = id.substring(0, 4);
    let mes = id.substring(4, 6);
    let dia = id.substring(6);

    mes = parseInt(mes);

    let fecha = new Date();
    fecha.setFullYear(anyo);
    fecha.setMonth(mes - 1);
    fecha.setDate(dia);
    for (let i = 0; i < comentarioParaEscribir.length; i++) {
        if (id == comentarioParaEscribir[i].idDia) {
            listaComentarios.innerHTML += '<p> El comentario del dia ' + fecha.toLocaleDateString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' es: ' + comentarioParaEscribir[i].textoAGuarda;
        }
    }
    for (let i = 0; i < comentarioDiaFestivo.length; i++) {
        if (id == comentarioDiaFestivo[i].idDia) {
            listaComentarios.innerHTML += '<p> El comentario del dia ' + fecha.toLocaleDateString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' es: ' + comentarioDiaFestivo[i].textoAGuarda;
        }
    }
    for (let i = 0; i < comentarioDiaFestivoFix.length; i++) {
        if (id == comentarioDiaFestivoFix[i].idDia) {
            listaComentarios.innerHTML += '<p> El comentario del dia ' + fecha.toLocaleDateString("es-ES", { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' es: ' + comentarioDiaFestivoFix[i].textoAGuarda;
        }
    }
}
function marcarDiasConComentarios() {
    if (localStorage.getItem('cositas') === null) {
        console.log('no ta localStorage');
    } else {
        let diasConComentarios = JSON.parse(localStorage.getItem("cositas"));
        console.log(diasConComentarios);
        if (Array.isArray(diasConComentarios)) {
            for (let i = 0; i < diasConComentarios.length; i++) {
                let diaConComentario = diasConComentarios[i].idDia;
                let dia = document.getElementById(diaConComentario);
                if (dia) {
                    dia.classList.add("dia-con-comentario");
                }
            }
        }
    }
}
function guardarLosFestiusAunals() {
    fetch('festivos.json')
        .then(response => response.json())
        .then(data => {
            const festiusAnuals = data.festiusAnuals;
            const festiusFixes = data.festiusFixes;
            console.log(festiusAnuals);
            console.log(festiusFixes);
            let festiusAnualsArray = [];
            for (let i = 0; i < festiusAnuals.length; i++) {
                let festiuAnual = festiusAnuals[i];
                let comentario = {
                    idDia: festiuAnual.data,
                    textoAGuarda: festiuAnual.nom_del_festiu
                };
                festiusAnualsArray.push(comentario);
            }
            localStorage.setItem("festiusAnuals", JSON.stringify(festiusAnualsArray));

            let date = new Date();
            let anyActual = date.getFullYear();
            let festiusFixesArray=[];
            for (let i = 0; i < festiusFixes.length; i++) {
                let festiuFixes=festiusFixes[i];
                console.log(festiuFixes);
                let idDia = anyActual + festiuFixes.data;
                let textoAGuarda = festiuFixes.nom_del_festiu;
                let comentario = {
                    idDia:idDia,
                    textoAGuarda:textoAGuarda
                };
                festiusFixesArray.push(comentario)          
            }
            localStorage.setItem('festiusFixes', JSON.stringify(festiusFixesArray));
        }
        );
}
function marcarLosDiasQueTienenFestivo() {
    if (localStorage.getItem('festiusAnuals') === null || localStorage.getItem('festiusFixes') === null) {
        console.log('no ta');
    } else {
        let festivoAnual = JSON.parse(localStorage.getItem("festiusAnuals"));
        let festiuFix=JSON.parse(localStorage.getItem('festiusFixes'));
        console.log(festivoAnual);
        console.log(festiuFix);
        if (Array.isArray(festivoAnual)) {
            for (let i = 0; i < festivoAnual.length; i++) {
                let diaConFestivoAnual = festivoAnual[i].idDia;
                let dia = document.getElementById(diaConFestivoAnual);
                if (dia) {
                    dia.classList.add("dia-con-festivo");
                }
            }
        }
        if (Array.isArray(festivoAnual)) {
            for (let i = 0; i < festiuFix.length; i++) {
                let diaConFestiuFix = festiuFix[i].idDia;
                let dia = document.getElementById(diaConFestiuFix);
                if (dia) {
                    dia.classList.add("dia-con-festivo");
                }
            }
        }
    }
}