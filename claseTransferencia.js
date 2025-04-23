"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transferencia = /** @class */ (function () {
    function transferencia(pImporte, pCbu, pComprobante, pApellidoYNombre) {
        this.importe = pImporte;
        this.cbu = pCbu;
        this.comprobante = pComprobante;
        this.apellidoYNombreDestinatario = pApellidoYNombre;
        this.limiteTransferencia = 50000;
    }
    transferencia.prototype.procesarPago = function () {
        console.log("Usted ha hecho una transferencia por $ ".concat(this.importe, " al cbu numero ").concat(this.cbu));
    };
    transferencia.prototype.cancelarPago = function () {
        console.log("La transferencia hecha a ".concat(this.apellidoYNombreDestinatario, " por la cantidad de $ de ").concat(this.importe, " ha sido cancelada"));
    };
    transferencia.prototype.generarRecibo = function () {
        console.log("Puede descargar su comprobante ".concat(this.comprobante));
    };
    transferencia.prototype.limitarPago = function () {
        if (this.importe >= this.limiteTransferencia) {
            return "Ha superado su limite, intente con un valor menor";
        }
        else {
            return "Su transferencia ha sido exitosa";
        }
    };
    return transferencia;
}());
var primerPago = new transferencia(10000, 123456789, "aprobado", "labruneeVanina");
console.log(primerPago);
console.log(primerPago.limitarPago());
var segundoPago = new transferencia(80000, 987654321, "rechazada", "labruneeVanina");
console.log(segundoPago);
console.log(segundoPago.limitarPago());
