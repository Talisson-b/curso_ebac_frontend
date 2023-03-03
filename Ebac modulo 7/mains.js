const form  = document.querySelector('form');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const error = document.getElementById('error-message')
const successe = document.getElementsByClassName('successe')


form.addEventListener ('submit', function(e) {
    e.preventDefault();

    if (parseInt(numeroB.value) <= parseInt(numeroA.value)) {
        document.querySelector('#error-message').style.display = 'block'
        return false;
    } else {
        document.querySelector('.successe').style.display = 'block'
        form.reset();
    }

});

form.addEventListener('input', () => {
    document.querySelector('.successe').style.display = 'none'
    document.querySelector('#error-message').style.display = 'none'

    

})


