const button = document.querySelector('[data-modal-button="modal-1"]');
const modalWindow = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

button.addEventListener('click', function () {
  modalWindow.classList.remove('hidden')
})

buttonClose.addEventListener('click', function () {
  modalWindow.classList.add('hidden')
})

modalWindow.addEventListener('click', function () {
  modalWindow.classList.add('hidden')
})

modalWindow.querySelector('.modal-window').addEventListener('click', function (e) {
  e.stopPropagation();
})




// const button = document.querySelectorAll('[data-modal-button]');
// const modalWindows = document.querySelectorAll('[data-modal]');
// const buttonClose = document.querySelectorAll('[data-modal-close]');

// button.forEach(function (item) {
//   item.addEventListener('click', function() {
//     console.log(this.dataset.modalButton);
//     const modalWindow = document.querySelector(`#${this.dataset.modalButton}`);
//     modalWindow.classList.remove('hidden');
//     buttonClose.forEach(function(item) {
//       item.addEventListener('click', function() {
//         modalWindow.classList.add('hidden');
//       })
//     });
//   })
// });
