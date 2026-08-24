const form = document.querySelector('#quote-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const confirmation = document.createElement('p');
  confirmation.className = 'form-confirmation';
  confirmation.innerHTML = `Thanks, ${data.get('name')}! Please call <a href="tel:02102366599">0210 236 6599</a> to confirm your garden enquiry.`;
  form.replaceChildren(confirmation);
});
