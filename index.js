const counter = document.getElementById('contador');
const btn = document.getElementById('incrementar');

let contador = 0;

// counter.textContent = localStorage.getItem('contador') || 0;

window.addEventListener('storage', (event) => {
  if (event.key === 'contador') {
    const newCounterValue = +event.newValue;
    counter.textContent = newCounterValue;
  }
});

btn.addEventListener('click', () => {
  contador++;
  localStorage.setItem('contador', contador);
  counter.textContent = contador;
});
