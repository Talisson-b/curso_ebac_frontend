$(document).ready(function ()  {
    $('button').click(function(){
        const tarefa = $('#adicionar').val()
        if(tarefa != 'talissonb') {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>')
            $('#adicionar').val('')
        }
    })
    
    
    $(document).on('click', '#lista-tarefas li', function() {
        $(this).css('text-decoration', 'line-through');
    });
    
})
