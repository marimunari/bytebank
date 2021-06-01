import { Cliente } from './Cliente.js';
/*import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';*/
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

/*
const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
*/

const diretor = new Diretor('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Ricardo', 5000, 12378945601);
gerente.cadastrarSenha('1234');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '1234');
console.log(diretorEstaLogado, gerenteEstaLogado);

const cliente = new Cliente('Lais', 15485485485, '456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');
console.log(clienteEstaLogado);

