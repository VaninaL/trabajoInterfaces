"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mercadoPago = /** @class */ (function () {
    function mercadoPago(pCbu, pAppellidoYNombre, pComprobante, pImportePago) {
        this.cbu = pCbu;
        this.apellidoYNombre = pAppellidoYNombre;
        this.saldo = 1000;
        this.comprobante = pComprobante;
        this.importePago = pImportePago;
    }
    mercadoPago.prototype.procesarPago = function () {
        console.log("El pago realizado al cbu numero ".concat(this.cbu, " se ha realizado correctamente"));
    };
    mercadoPago.prototype.cancelarPago = function () {
        console.log("Se ha cancelado el pago al destinatario ".concat(this.apellidoYNombre));
    };
    mercadoPago.prototype.generarRecibo = function () {
        console.log("puede descargar su comprobante ".concat(this.comprobante));
    };
    mercadoPago.prototype.getSaldo = function () {
        return "Su saldo actual es de " + (this.saldo - this.importePago);
    };
    return mercadoPago;
}());
var compra = new mercadoPago(124587956, "labruneeVanina", "aprobado", 500);
console.log(compra);
console.log(compra.getSaldo());
