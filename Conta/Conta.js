import Cliente from "../Cliente.js";

// Clase abstrata
export default class Conta{


    set cliente(cliente){
        if(!cliente instanceof Cliente){
            return;
        }
        this._cliente = cliente
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Classes abstratas não poder ser instanciadas");
        }
        
        this.agencia = agencia;
        this.cliente = cliente
        this._saldo = saldoInicial || 0;
    }

    // Método abstrato
    sacar(valor){
        throw new Error("Métodos abstratos dever ser sobreescritos, o método sacar da Classe Conta, não pode ser chamado diretamente.")
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(conta)
    }

}
