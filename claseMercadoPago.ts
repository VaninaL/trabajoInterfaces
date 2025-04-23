import { IPago } from "./interfaz";

class mercadoPago implements IPago{
    cbu:number;
    apellidoYNombre:string;
    saldo:number;
    comprobante:string;
    importePago:number;  
    
    constructor(pCbu:number,pAppellidoYNombre:string,pComprobante:string,pImportePago:number){
        this.cbu = pCbu;
        this.apellidoYNombre = pAppellidoYNombre;
        this.saldo = 1000;
        this.comprobante = pComprobante;
        this.importePago = pImportePago;
    }

    procesarPago(): void {
        console.log(`El pago realizado al cbu numero ${this.cbu} se ha realizado correctamente`);
        
    }
    cancelarPago(): void {
        console.log(`Se ha cancelado el pago al destinatario ${this.apellidoYNombre}`);
        
    }
    generarRecibo(): void {
        console.log(`puede descargar su comprobante ${this.comprobante}`);
        
    }
    getSaldo(): string {                
    return "Su saldo actual es de " + (this.saldo - this.importePago);
    }
}

let compra:mercadoPago = new mercadoPago(124587956,"labruneeVanina","aprobado",500);
console.log(compra);
console.log(compra.getSaldo());

