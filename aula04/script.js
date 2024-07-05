"use strict";
/*
let tipoString:string = `string`
let tipoNumber:number = 10
let tipoBoolean:boolean = true

console.log(`string: ${tipoString}, number: ${tipoNumber}, booblean: ${tipoBoolean}`)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nome = (readlineSync.question('Insira seu nome: '));
var idade = Number((readlineSync.question('Insira sua idade: ')));
var temCarteira = (readlineSync.question('Voce tem carteira de motorista? Y/N: ')).toUpperCase();
function podeDirigir(myNome, myIdade, myTemCarteira) {
    if (myIdade >= 18 && myTemCarteira == "Y") {
        console.log("".concat(myNome, ", voce pode dirigir"));
    }
    else {
        console.log("".concat(myNome, ", voce nao pode dirigir"));
    }
}
podeDirigir(nome, idade, temCarteira);
