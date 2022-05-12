const headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach(function(item) {
  item.addEventListener('click', showBlocks);
  // function() {
  //   this.nextElementSibling.classList.toggle('hidden')
  // });
});

function showBlocks() {
  this.nextElementSibling.classList.toggle('hidden')
}

/* Вариант с показом одного блока
const headers = document.querySelectorAll('[data-name="accordeon-title"]');
const contents = document.querySelectorAll('.list-content');

headers.forEach(function(item) {
  item.addEventListener('click', showBlocks);
  });
  
  function showBlocks() {
    contents.forEach(function (item) {
      item.classList.add('hidden')  
    });
    this.nextElementSibling.classList.remove('hidden')
} */