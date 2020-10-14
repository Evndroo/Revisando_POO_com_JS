export default class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.isAuthenticable(autenticavel)){
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static isAuthenticable(autenticavel){
        return ("autenticar" in autenticavel && 
                autenticavel.autenticar instanceof function)
    }
}