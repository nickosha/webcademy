const button = document.querySelector('#button');
const content = document.querySelector('#content');


button.addEventListener('click', function () {

  if (content.classList.toggle('content-hidden')) {
    button.textContent = 'Открыть окно'
  } else {
    button.textContent = 'Закрыть окно'
  }
  
});
