const bigHeart = document.getElementById('bigHeart');
const message = document.getElementById('message');

bigHeart.addEventListener('click', () => {
  bigHeart.style.transform = 'scale(0)';
  setTimeout(() => {
    bigHeart.style.display = 'none';
    message.style.display = 'block';
  }, 300);
});
