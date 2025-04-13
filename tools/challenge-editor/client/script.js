const itemList = document.querySelector('.item-list');

itemList.addEventListener('click', e => {
  const button = e.target.closest('button'); // Fix: Use closest()
  if (button) {
    if (button.classList.contains('filled')) {
      button.classList.remove('filled');
      button.innerHTML = '♡';
    } else {
      button.classList.add('filled');
      button.innerHTML = '❤';
    }
  }
});
