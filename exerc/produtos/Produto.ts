export interface Produto{
    nome:string
    tipo:string
    preco:number
    
    calcularValorTotal():number
    infos():string
}
