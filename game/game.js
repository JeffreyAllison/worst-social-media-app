import {
  checkAuth,
  logout,
  client,
  getUser,
  getActivePlayers,
  getMyProfile
} from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
const allPlayersEl = document.getElementById('all-players');
const formEl = document.querySelector('form');
//const currentUser = getUser();

checkAuth();

let currentPlayer;

logoutButton.addEventListener('click', () => {
  logout();
});


window.addEventListener('load', async () => {
  currentPlayer = await getMyProfile();
  const activePlayers = await getActivePlayers();

  for (let player of activePlayers) {
    const playerDivEl = document.createElement('div');
    playerDivEl.textContent = `👽 ${player.email}`;
    playerDivEl.style.transform = `translate(${player.x_position}px, ${player.y_position}px)`;

    allPlayersEl.append(playerDivEl);
  }

});