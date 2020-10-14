import Conta from "./Conta.js";

export default class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(agencia, cliente){
        super(agencia, cliente, 0)
        ContaCorrente.numeroDeContas++;
    }


    //sobreescrevendo comportamento da classe mãe
    sacar(valor){
        let taxa = 1.1;  
        return this._sacar(valor, taxa) 
    }
}
