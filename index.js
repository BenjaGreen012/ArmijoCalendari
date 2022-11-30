"use strict";
let diasSetmana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
let mesesDelAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosot', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let escribirAnyo = document.getElementById('anyo');
let escribirMes = document.getElementById('mes');
let generarDias = document.getElementById('dias');
let numDias = document.getElementById('numsDias');
let cosasDate = new Date();
let anyo = cosasDate.getFullYear();
let mes = cosasDate.getMonth();
// let mes = 4;
let anyoActual=cosasDate.getFullYear();
let ultimo = new Date(anyo, mes + 1, 0);
let primero = new Date(anyo, mes, 1);
const DIAS = 7;
const LINEAS = 6;
let cont = 1;
let contDias = 0;
let primeraSetmana = primero.getDay();
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
        cont = 1;
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
        cont = 1;
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
        cont = 1;
        generarNumerosCaledario();
        escribirMes.innerHTML = mesesDelAnyo[mes];
    } else {
        numDias.innerHTML = "";
        mes = 0;
        anyo=anyo+1;
        console.log(mes);
        ultimo = new Date(anyo, mes + 1, 0);
        primero = new Date(anyo, mes, 1);
        primeraSetmana = primero.getDay();
        cont = 1;
        generarNumerosCaledario();
        escribirMes.innerHTML = mesesDelAnyo[mes];
        escribirAnyo.innerHTML=anyo;
    }
}
function generarNumerosCaledario() {
    escribirMes.innerHTML = mesesDelAnyo[mes];
    escribirAnyo.innerHTML = anyo;
    for (let i = 0; i < LINEAS; i++) {
        for (let j = 0; j < DIAS; j++) {
            if (primeraSetmana > 0) {
                if (j == 0) {
                    numDias.innerHTML += '<div class="diasCalendario sabadoDomingo">x </div>';
                    primeraSetmana--;
                } else {
                    numDias.innerHTML += '<div class="diasCalendario">x </div>';
                    primeraSetmana--;
                }
            } else {
                if (j == 0 || j == 6) {
                    if (cont <= ultimo.getDate()) {
                        numDias.innerHTML += '<div class="diasCalendario sabadoDomingo">' + cont + ' </div>';
                        cont++;
                    } else {
                        numDias.innerHTML += '<div class="diasCalendario"> x </div>';
                    }
                } else {
                    if (cont <= ultimo.getDate()) {
                        numDias.innerHTML += '<div class="diasCalendario">' + cont + ' </div>';
                        cont++;
                    } else {
                        numDias.innerHTML += '<div class="diasCalendario"> x </div>';
                    }
                }
            }

        }
        numDias.innerHTML += '<br>';
    }
}