var btn = document.querySelector('.search-information-btn');
var form = document.querySelector('.search-form');
var arrival = document.getElementById('date-check');
var departure = document.getElementById('date-out');

form.classList.remove('search-form-active');

btn.addEventListener('click', function (evt) {
  if (form.classList.contains('search-form-active')) {
    form.classList.remove('search-form-active');
    form.classList.remove('modal-error');
  }
  else {
    form.classList.add('search-form-active');
    arrival.focus();
  }
});

form.addEventListener('submit', function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    form.classList.remove('modal-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (form.classList.contains('search-form-active')) {
      evt.preventDefault();
      form.classList.remove('search-form-active');
    }
  }
});
