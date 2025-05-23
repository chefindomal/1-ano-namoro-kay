// 
const container = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heart.style.opacity = Math.random();

  const size = Math.random() * 10 + 10;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.style.backgroundColor = randomColor();

  container.appendChild(heart);

  // Remover coração após animação
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

function randomColor() {
  const colors = ['#ff4d6d', '#ff8fa3', '#ffccd5', '#f582ae', '#f3c5ff', '#ffc8dd'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Loop infinito
setInterval(createHeart, 200);


// CARROSSEL DE IMAGENS
let currentIndex = 0;
const images = document.querySelectorAll(".carrossel .bloco");
const leftButton = document.querySelector(".botao-seta-left");
const rightButton = document.querySelector(".botao-seta-right");

function showImages() {
    // Exibir todas as imagens no carrossel
    images.forEach((image, index) => {
        if (index < currentIndex || index > currentIndex + 2) {
            image.style.display = "none";  // Ocultar imagens fora do alcance
        } else {
            image.style.display = "block";  // Mostrar as imagens dentro do alcance
        }
    });
}
function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        showImages();
    }
}

function moveRight() {
    if (currentIndex < images.length - 3) {  // Garantir que existem mais 3 imagens para mostrar
        currentIndex++;
        showImages();
    }
}
// Inicializar a exibição das imagens
showImages();

// Adicionar ouvintes de evento para os botões
leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);


