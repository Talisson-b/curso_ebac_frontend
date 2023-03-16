$(document).ready(function(){
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        cep: {
            required: true
        },
        rua: {
            required: true
        },
        n: {
            required: true
        }
    },
    messages: {
        nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email',
            cpf: 'Por favor, insira seu CPF',
            cep: 'Por favor, insira seu CEP',
            rua: 'Por favor, insira o nome da sua Rua',
            n: 'Por favor, insira o numero de sua casa'



    }
})


});
