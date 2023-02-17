
const moreBands = document.querySelectorAll('.hide-mobile');
const moreButton = document.querySelector('.more-button');
const lessButton = document.querySelector('.less-button');


function showBands () {
  moreBands.forEach((e) => {
    e.classList.add('show-mobile');
    moreButton.classList.add('hide-mobile');
  });
}

function hideBands () {
  moreBands.forEach((e) => {
    e.classList.remove('show-mobile');
    moreButton.classList.remove('hide-mobile');
  })
}

moreButton.addEventListener("click", e => {
  showBands();
})

lessButton.addEventListener("click", e => {
  hideBands();
})