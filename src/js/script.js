var button = document.querySelector('#btn')
var modal = document.querySelector('#modal')
var close = document.querySelector('#close')

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
    modal.classList.remove('modal_active');
});

function closeModal() {
    modal.classList.remove('modal_active')
}

setTimeout(closeModal, 5000);