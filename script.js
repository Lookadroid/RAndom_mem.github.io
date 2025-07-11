const memeButton = document.getElementById('memeButton');
const memeImg = document.getElementById('meme');
const loader = document.getElementById('loader');

window.addEventListener('load', () => {
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 10);
});

async function showMeme() {
  memeButton.disabled = true;
  try {
    const response = await fetch('https://meme-api.com/gimme');
    const data = await response.json();
    memeImg.src = data.url;
  } catch (error) {
    console.error('Ошибка загрузки мема:', error);
    memeImg.src = 'https://i.imgflip.com/30b1gx.jpg';
  } finally {
    setTimeout(() => {
      memeButton.disabled = false;
    }, 3000);
  }
}

memeButton.addEventListener('click', showMeme);
