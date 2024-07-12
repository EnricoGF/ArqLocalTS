import { Alimento } from "./produtos/Alimento";
import { Eletronico } from "./produtos/Eletronico";
import { Bebida } from "./produtos/Bebida";
import * as readlineSync from 'readline-sync';

const myAlimento:Alimento = new Alimento(`Banana`, `Alimento`, 5)
const myEletronico:Eletronico = new Eletronico(`Geladeira`, `Eletronico`, 1000)
const myBebida:Bebida = new Bebida(`Suco`, `Bebida`, 15)
const myAlimento2:Alimento = new Alimento(`Arroz`, `Alimento`, 16)
const myBebida2:Bebida = new Bebida(`Agua`, `Bebida`, 8)

let carrinhoDeCompras:any = []

function comprarProduto ():void{
    let perguntaProduto:string = `Produtos disponiveis:\n1. ${myAlimento.infos()}\n2. ${myBebida.infos()}\n3. ${myEletronico.infos()}\n4. ${myAlimento2.infos()}\n5. ${myBebida2.infos()}\n`
    const produtoSelecionado:number = Number((readlineSync.question(perguntaProduto)))

    switch(produtoSelecionado){
        case 1:
            carrinhoDeCompras.push(myAlimento)
            break
        case 2:
            carrinhoDeCompras.push(myBebida)
            break
        case 3:
            carrinhoDeCompras.push(myEletronico)
            break
        case 4:
            carrinhoDeCompras.push(myAlimento2)
            break
        case 5:
            carrinhoDeCompras.push(myBebida2)
            break
    }
}

function verCarrinho():void{
    console.log(carrinhoDeCompras)

    let tamanhoCarrinho = carrinhoDeCompras.length()
    let valorTotalCarrinho:number = 0

    for(let cont:number = 0; cont < tamanhoCarrinho; cont++){
        let calcularValorCarrinho:number = carrinhoDeCompras[cont].getPreco()
        valorTotalCarrinho += calcularValorCarrinho
    }
    console.log(`Valor total:${valorTotalCarrinho}`)

}

function pagar():void{

}

const pergunta:string = `Menu:\n1. Comprar produto\n2. Ver carrinho\n3. Pagar\n4. Sair\n`
const resposta:number = Number((readlineSync.question(pergunta)))

let constinuaPrompt:boolean = true

while (constinuaPrompt == true){
    switch(resposta){
        case 1: 
            comprarProduto()
            break

        case 2:
            verCarrinho()
            break

        case 3:
            pagar()
            break

        case 4:
            constinuaPrompt = false
            console.log(`Saindo...`)
            break

        default:
        console.log(`Opcao invalida`)
    }
}
