import { MetodosDePagamento } from "./MetodosDePagamento";

export class CartaoDeCredito implements MetodosDePagamento{
    metodo: string;
    preco: number;

    constructor(metodo:string, preco:number){
        this.metodo = metodo
        this.preco = preco
    }

    pagar() {
    }
}