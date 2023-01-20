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
let mes = cosasDate.getMonth();
// let mes = 4;
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
ultimoMesAnterior = ultimoMesAnterior - primeraSetmana + 2;
generarDiasSetmana();
generarNumerosCaledario();
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
                    let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (ultimoMesAnterior);
                    numDias.innerHTML += '<div class="diasCalendario sabadoDomingo disQueNoSon" id="' + idDia + '" onclick="mostrarLosComentarios(this)">' + ultimoMesAnterior + '</div>';
                    ultimoMesAnterior++;
                    primeraSetmana--;
                } else {
                    let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (ultimoMesAnterior);
                    numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon disQueNoSon" id="' + idDia + '" onclick="mostrarLosComentarios(this)">' + ultimoMesAnterior + '</div>';
                    ultimoMesAnterior++;
                    primeraSetmana--;
                }
            } else {
                if (j == 5 || j == 6) {
                    let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (cont < 10 ? "0" + cont : cont);
                    if (cont <= ultimo.getDate()) {
                        numDias.innerHTML += '<div class="diasCalendario sabadoDomingo" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + cont + ');mostrarLosComentarios(this)">' + cont + '</div>';
                        cont++;
                    } else {
                        let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (cont < 10 ? "0" + cont : cont);
                        numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon disQueNoSon" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + contDespues + ');mostrarLosComentarios(this)">' + contDespues + ' </div>';
                        contDespues++;
                    }
                } else {
                    if (cont <= ultimo.getDate()) {
                        let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (cont < 10 ? "0" + cont : cont);
                        numDias.innerHTML += '<div class="diasCalendario" id="' + idDia + '" onclick="guardadCosasEnLosDias(' + cont + ');mostrarLosComentarios(this)">' + cont + ' </div>';
                        cont++;
                    } else {
                        let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (contDespues < 10 ? "0" + contDespues : contDespues);
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
        let idDia = anyo + (mes < 10 ? "0" + mes : mes) + (dia < 10 ? "0" + dia : dia);
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
}
function mostrarLosComentarios(objectRebut) {
    let id = objectRebut.id;
    let comentariosDeLosDias = localStorage.getItem("cositas");
    let comentarioParaEscribir = JSON.parse(comentariosDeLosDias);
    listaComentarios.innerHTML = "";
    let anyo = id.substring(0, 4);
    let mes = id.substring(4, 6);
    let dia = id.substring(6);

    mes = parseInt(mes);

    let fecha = new Date();
    fecha.setFullYear(anyo);
    fecha.setMonth(mes);
    fecha.setDate(dia);
    for (let i = 0; i < comentarioParaEscribir.length; i++) {
        if (id == comentarioParaEscribir[i].idDia) {
            listaComentarios.innerHTML += '<p> El comentario del dia ' + fecha.toLocaleDateString("es-ES",{ day: '2-digit', month: '2-digit', year: 'numeric'})+ ' es: ' + comentarioParaEscribir[i].textoAGuarda;
        }
    }
}