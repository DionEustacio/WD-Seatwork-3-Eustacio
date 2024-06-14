const buttons = document.querySelectorAll('.button[data-target]');

buttons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.dataset.target;
    const targetSection = document.getElementById(targetId);
    targetSection.style.display = 'block';
  });
});