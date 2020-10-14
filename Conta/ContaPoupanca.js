import Conta from "./Conta.js";

export default class ContaPoupanca extends Conta{

    constructor(agencia, cliente, saldoInicial){
        super(agencia, cliente, saldoInicial)    
    }

    //sobreescrevendo comportamento da classe mãe
    sacar(valor){
        let taxa = 1.02;  
        return this._sacar(valor, taxa) 
    }
}
