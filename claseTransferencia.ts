import { IPago } from "./interfaz";

class transferencia implements IPago{
    private importe:number;
    private cbu:number;
    private comprobante:string;
    private apellidoYNombreDestinatario:string;
    private limiteTransferencia:number;


    constructor(pImporte:number,pCbu:number,pComprobante:string,pApellidoYNombre:string){
        this.importe = pImporte;
        this.cbu = pCbu;
        this.comprobante = pComprobante;
        this.apellidoYNombreDestinatario = pApellidoYNombre;
        this.limiteTransferencia = 50000;
    }

    procesarPago(): void {
        console.log(`Usted ha hecho una transferencia por $ ${this.importe} al cbu numero ${this.cbu}`);
        
    }
    cancelarPago(): void {
        console.log(`La transferencia hecha a ${this.apellidoYNombreDestinatario} por la cantidad de $ de ${this.importe} ha sido cancelada`);
        
    }
    generarRecibo(): void {
        console.log(`Puede descargar su comprobante ${this.comprobante}`);
        
    }
    limitarPago():string {
        if(this.importe >= this.limiteTransferencia){
            return"Ha superado su limite, intente con un valor menor";            
        }else{
            return"Su transferencia ha sido exitosa";            
        }
    }
}

const primerPago:transferencia = new transferencia(10000,123456789,"aprobado","labruneeVanina");
console.log(primerPago);
console.log(primerPago.limitarPago());

const segundoPago:transferencia = new transferencia(80000,987654321,"rechazada","labruneeVanina")
console.log(segundoPago);
console.log(segundoPago.limitarPago());
