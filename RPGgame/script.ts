/* class Coruja {
    nome:string
    cor:string
    voa:boolean
    chirria:boolean

    constructor (owlNome:string, owlCor:string, owlVoa:boolean, owlChirria:boolean) {
        this.nome = owlNome
        this.cor = owlCor
        this.voa = owlVoa
        this.chirria =owlChirria
    }

    voar():string {
        let corujaVoa:string = ``
        if (this.voa == true){
            corujaVoa= `A coruja esta voando`
        }
        else if (this.voa == false) {
            corujaVoa = `A coruja nao pode voar`
        }
        return corujaVoa
    }

    infos():string {
        return `O nome da coruja eh ${this.nome}, ela eh ${this.cor}, e ela voa: ${this.voa}`
    }

    som():string{
        let corujaChirria:string = ``
        if(this.chirria == true){
            corujaChirria = `A coruja esta chirriando`
        }
        else if (this.chirria == false) {
            corujaChirria = `A coruja nao pode chirriar`
        }
        return corujaChirria
    }
}

const minhaCoruja:Coruja = new Coruja(`Carlos`, `Branca`, false, true)

console.log(minhaCoruja.infos())
console.log(minhaCoruja.som())
console.log(minhaCoruja.voar())
 */

class Player {
    playerName:string
    playerAttack:number
    playerHealth:number

    constructor(name:string, health:number, attack:number){
        this.playerName = name
        this.playerHealth = health
        this.playerAttack = attack
    }

    playerDealDamage():number{
        return this.playerAttack
    }

    playerTookDamageFunc():number{
        return this.playerHealth - playerTookDamageNumber
    }
}

class Enemy{
    enemyAttack:number
    enemyHealth:number

    constructor(attack:number, health:number){
        this.enemyAttack = attack
        this.enemyHealth = health
    }

    enemyAttackPlayerFunc():number{
        return this.enemyAttack
    }

    enemyTookDamageFunc():number{
        return this.enemyHealth - playerDealDamageNumber
    }
}
const enemyInstance:Enemy = new Enemy(10,100)
const playerInstance:Player = new Player(`Enrico`, 12, 80)

const playerTookDamageNumber = enemyInstance.enemyAttackPlayerFunc()
const playerDealDamageNumber = playerInstance.playerDealDamage()
