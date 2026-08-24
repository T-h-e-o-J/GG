const form = document.querySelector('#quote-form');

form.addEventListener('submit', (event) => {
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Sending...';
});
