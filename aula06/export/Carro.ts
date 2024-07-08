import { Moto } from "./Moto"

export class Carro{
    carroMarca:string
    carroCor:string
    carroCombustivel:string
    carroPotencia:number

    constructor(brand:string, color:string, fuel: string, power:number){
        this.carroMarca = brand
        this.carroCor = color
        this.carroCombustivel = fuel
        this.carroPotencia = power
    }

    aceleraCarro():void{
        console.log(`O carro da marca ${this.carroMarca} esta acelerando`)
    }

    infosCarro():void{
        console.log(`O carro eh da marca ${this.carroMarca}, eh ${this.carroCor}, usa ${this.carroCombustivel} e tem ${this.carroPotencia} de potencia`)
    }

    comparaPotencia(potencia:Moto):void{
        console.log(`O carro tem ${this.carroPotencia}, a moto tem ${potencia.motoPotencia}`)
    }
}