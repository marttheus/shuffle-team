const form = document.querySelector('form');
const button = document.querySelector('button');
const validationMessage = document.querySelector('#validation-message');
const minPlayersInput = document.querySelector('#min-players');

button.addEventListener('click', function(event) {
  event.preventDefault();

  const playersInput = document.querySelector('#players');
  const players = playersInput.value.split(',').map(player => player.trim()).filter(player => player !== '');

  const minPlayers = Number(minPlayersInput.value);
  const numTeams = Math.ceil(players.length / minPlayers);

  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = '';

  if(players.length < 2) {
    validationMessage.textContent = `É necessário ter pelo menos 2 jogadores para sortear.`;
    return;
  }

  //if (players.length < numTeams * minPlayers) {
  //  validationMessage.textContent = `É necessário ter pelo menos ${numTeams * minPlayers} jogadores para formar ${numTeams} time(s).`;
  //  return;
  //}

  validationMessage.textContent = '';
  const teams = [];

  const shuffledPlayers = shuffle(players);

  for (let i = 0; i < numTeams; i++) {
    teams.push(shuffledPlayers.slice(i * minPlayers, (i + 1) * minPlayers));
  }

  for (let i = 0; i < numTeams; i++) {
    const teamDiv = document.createElement('div');
    teamDiv.classList.add('mb-4');
    teamDiv.classList.add('team');

    const teamHeader = document.createElement('h3');
    teamHeader.textContent = `Time ${i + 1}`;
    teamDiv.appendChild(teamHeader);

    const teamList = document.createElement('ul');
    for (let j = 0; j < teams[i].length; j++) {
      const player = teams[i][j];
      const listItem = document.createElement('li');
      listItem.textContent = player;
      teamList.appendChild(listItem);
    }
    teamDiv.appendChild(teamList);

    resultDiv.appendChild(teamDiv);
  }
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
