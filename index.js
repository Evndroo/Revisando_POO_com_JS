import Cliente from "./Cliente.js"
import Diretor  from "./Funcionario/Diretor.js";
import Gerente  from "./Funcionario/Gerente.js"
import SistemaAutenticacao  from "./SistemaAutenticacao.js";

const diretor = new Diretor("Evandro", 10000, 12345645600)
const gerente = new Gerente("Ricardo", 5000, 12345678900);
diretor.cadastrarSenha("")
let estaLogado = SistemaAutenticacao.login(diretor, "");

console.log(estaLogado)
