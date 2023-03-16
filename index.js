"use strict";
exports.__esModule = true;
exports.cualquiera = void 0;
var nombre = "Hola";
var numero = 1231;
exports.cualquiera = 123123;
exports.cualquiera = "Fasdfas";
var buleano = true;
var array = ["hola", "chau"];
var array2 = ["lucas", 1, true, "jose", { id: 1, name: "pedro" }, 3123];
array2.push({ id: 2, name: false });
var unoUotro = "SUMAR";
var otroObj = {
    dia: "lunes"
};
var initialState;
var fnc = function () { return console.log("Hola"); };
var soyotracosa = function () {
    while (true) {
        console.log("nunca salimos");
    }
};
var SEMANAS;
(function (SEMANAS) {
    SEMANAS[SEMANAS["lunes"] = 10] = "lunes";
    SEMANAS[SEMANAS["martes"] = 11] = "martes";
    SEMANAS[SEMANAS["miercoles"] = 12] = "miercoles";
    SEMANAS[SEMANAS["jueves"] = 13] = "jueves";
    SEMANAS[SEMANAS["viernes"] = 14] = "viernes";
})(SEMANAS || (SEMANAS = {}));
console.log(SEMANAS.miercoles);
var tupla = ["123", true, 123];
var sumar = function (a, b) { return a + b; };
sumar(1, 3);
