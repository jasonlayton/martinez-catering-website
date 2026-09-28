document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(event) {
  event.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = "Thanks! This prototype form is ready to be connected to email, Formspree, Wix, Squarespace, or another form service.";
  return false;
}
