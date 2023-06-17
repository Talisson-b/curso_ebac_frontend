const alunos = [
    {
        nome: 'paulinho',
        nota:10,
    },
        {
        nome: 'maria',
        nota:5,
    },
        {
        nome: 'zezinho',
        nota:7,
    },
        {
        nome: 'aninha',
        nota:3,
    },
]


function Aprovados(alunos) {
    return alunos.nota >= 6
    
}

const alunosFiltrados = alunos.filter(Aprovados)

console.log(alunosFiltrados)
