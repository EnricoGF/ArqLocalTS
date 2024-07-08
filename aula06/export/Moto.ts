import { Carro } from "./Carro"

export class Moto{
    motoMarca:string
    motoCor:string
    motoCombustivel:string
    motoPotencia:number

    constructor(brand:string, color:string, fuel: string, power:number){
        this.motoMarca = brand
        this.motoCor = color
        this.motoCombustivel = fuel
        this.motoPotencia = power
    }

    aceleraMoto():void{
        console.log(`A moto da marca ${this.motoMarca} esta acelerando`)
    }

    infosMoto():void{
        console.log(`A moto eh da marca ${this.motoMarca}, eh ${this.motoCor}, usa ${this.motoCombustivel} e tem ${this.motoPotencia} de potencia`)
    }

    comparaMarca(marca:Carro):void{
        console.log(`A moto eh da marca ${this.motoMarca} e o carro eh ${marca.carroMarca}`)
    }
}