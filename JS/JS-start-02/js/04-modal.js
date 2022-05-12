const buttons = document.querySelectorAll('[data-modal-button]');
const buttonsClose = document.querySelectorAll('[data-modal-close]')
const allModal = document.querySelectorAll('[data-modal]');

buttons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modal = document.querySelector(`#${this.dataset.modalButton}`);
    modal.classList.remove('hidden');

    modal.querySelector('.modal-window').addEventListener('click', function (e) {
      e.stopPropagation();
    })
  })
})

buttonsClose.forEach(function (item) {
  item.addEventListener('click', function () {
    this.closest('[data-modal]').classList.add('hidden');
  })
})

allModal.forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.add('hidden');
  })  
});