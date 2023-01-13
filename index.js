"use strict";
let diasSetmana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'];
let mesesDelAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosot', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let escribirAnyo = document.getElementById('anyo');
let escribirMes = document.getElementById('mes');
let generarDias = document.getElementById('dias');
let numDias = document.getElementById('numsDias');
let cosasDate = new Date();
let anyo = cosasDate.getFullYear();
let mes = cosasDate.getMonth();
// let mes = 4;
let ultimoMesAnterior=new Date(anyo,mes-2,0).getDate();
let anyoActual=cosasDate.getFullYear();
let ultimo = new Date(anyo, mes + 1, 0);
let primero = new Date(anyo, mes, 1);
const DIAS = 7;
const LINEAS = 6;
let cont = 1;
let contDespues=1;
let contDias = 0
let primeraSetmana = primero.getDay();
if (primeraSetmana==0) {
    primeraSetmana=7;
}
ultimoMesAnterior=ultimoMesAnterior-primeraSetmana+2;
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
        if (primeraSetmana==0) {
            primeraSetmana=7;
        }
        cont = 1;
        contDespues=1;
        ultimoMesAnterior=new Date(anyo,mes-2,0).getDate();
        ultimoMesAnterior=ultimoMesAnterior-primeraSetmana+2;
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
        if (primeraSetmana==0) {
            primeraSetmana=7;
        }
        cont = 1;
        contDespues=1;
        ultimoMesAnterior=new Date(anyo,mes-2,0).getDate();
        ultimoMesAnterior=ultimoMesAnterior-primeraSetmana+2;
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
        if (primeraSetmana==0) {
            primeraSetmana=7;
        }
        cont = 1;
        contDespues=1;
        ultimoMesAnterior=new Date(anyo,mes-2,0).getDate();
        ultimoMesAnterior=ultimoMesAnterior-primeraSetmana+2;
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
        if (primeraSetmana==0) {
            primeraSetmana=7;
        }
        cont = 1;
        contDespues=1;
        ultimoMesAnterior=new Date(anyo,mes-2,0).getDate();
        ultimoMesAnterior=ultimoMesAnterior-primeraSetmana+2;
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
            if (primeraSetmana-1 > 0) {
                if (j == 6) {
                    numDias.innerHTML += '<div class="diasCalendario sabadoDomingo">'+ultimoMesAnterior+'</div>';
                    ultimoMesAnterior++;
                    primeraSetmana--;
                } else {
                    numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon">'+ultimoMesAnterior+'</div>';
                    ultimoMesAnterior++;
                    primeraSetmana--;
                }
            } else {
                if (j == 5 || j == 6) {
                    if (cont <= ultimo.getDate()) {
                        numDias.innerHTML += '<div class="diasCalendario sabadoDomingo">' + cont + ' </div>';
                        cont++;
                    } else {
                        numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon">'+contDespues+' </div>';
                        contDespues++;
                    }
                } else {
                    if (cont <= ultimo.getDate()) {
                        numDias.innerHTML += '<div class="diasCalendario">' + cont + ' </div>';
                        cont++;
                    } else {
                        numDias.innerHTML += '<div class="diasCalendario diasMesQueNoSon">'+contDespues+' </div>';
                        contDespues++;
                    }
                }
            }

        }
        numDias.innerHTML += '<br>';
    }
}