/* eslint-disable no-plusplus */
import goblin from '../img/goblin.png';

export default function Goblin() {
  const arr = Array.from(document.querySelectorAll('.row_cell'));
  for (let i = 0; i <= arr.length; i++) {
    document.querySelectorAll('.goblin').forEach((elem) => elem.remove());
    if (!document.querySelector('.goblin')) {
      const dem = document.createElement('img');
      dem.src = goblin;
      dem.classList = 'goblin';
      arr[Math.floor(Math.random() * arr.length)].insertAdjacentElement('beforeend', dem);
    }
  }
}

// if (Array.from(document.getElementsByTagName('img')).length > 0) {
//   console.log(Array.from(document.getElementsByTagName('img')))
//   Array.from(document.getElementsByTagName('img'))[0].remove()
// } else {
//    const dem = document.createElement('img');
//    dem.src = goblin;
//    dem.classList = 'goblin';
//    t[Math.floor(Math.random() * t.length)].insertAdjacentElement('beforeend', dem);
// }
