function Pessoa(nome) {
    this.nome = nome;
}

function Jogador (nome, posicao, time, salario) {
    Pessoa.call(this, nome)
    this.posicao = posicao,
    this.time = time
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor
        }
    }

    
}

function Atacante (nome) {
    Jogador.call(this, nome, 'atacante', 'corinthians', 15000)
}

function Goleiro (nome) {
    Jogador.call(this, nome, 'Goleiro', 'corinthians', 8000)
}

const jogador1 = new Jogador('joaozinho', 'atacante', 'corinthians', 13000)

const jogador2 = new Atacante('pedrinho')

const jogador3 = new Goleiro ('zezinho')

console.log(jogador1)
console.log(jogador2)
console.log(jogador3)

console.log(jogador1.getSalario())
console.log(jogador2.getSalario())
console.log(jogador3.getSalario())
