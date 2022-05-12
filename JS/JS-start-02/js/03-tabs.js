const tabHeaders = document.querySelectorAll('[data-tab]');
const tabContents = document.querySelectorAll('[data-tab-content]');

console.log(tabContents);

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function() {
    tabContents.forEach(function (item) {
      item.classList.add('hidden')
    })
    const tabContent = document.querySelector(`#${this.dataset.tab}`);
    tabContent.classList.remove('hidden');
  })
})