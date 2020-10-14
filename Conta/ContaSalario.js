import Conta from "./Conta.js";

export default class ContaSalario extends Conta{

    constructor(cliente){
        super(100, cliente, 0)    
    }

    //sobreescrevendo comportamento da classe mãe
    sacar(valor){
        let taxa = 1.01;  
        return this._sacar(valor, taxa) 
    }
}
