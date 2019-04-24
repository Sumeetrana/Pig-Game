
var scores, roundScore, activePlayer, gamePlaying=true;

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

// // dice = Math.floor(Math.random() * 6 + 1);
// // // console.log(dice);
// // document.querySelector('#current-' + activePlayer).innerHTML = "<em>" + dice + "</em>";
// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score-0').textContent = 0;
// document.getElementById('score-1').textContent = 0;
// document.getElementById('current-0').textContent = 0;
// document.getElementById('current-1').textContent = 0;

init();
var previousDice;
document.querySelector('.btn-roll').addEventListener('click', function() {

	if (gamePlaying) {
		
		var dice;
		
		dice = Math.floor(Math.random() * 6 + 1);
		// dice = 6;
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		if (dice === 6 && previousDice === 6) {
			scores[activePlayer] = 0;
			document.getElementById('score-' + activePlayer).textContent = 0;
			nextPlayer();
		} else if (dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore; 

			if (previousDice && dice == 6) {
			roundScore = 0;
			scores[activePlayer] = 0;

			document.querySelector('#current-' + activePlayer).textContent = '0';
			document.querySelector('#score-' + activePlayer).textContent = '0';
		}
		} else {
			nextPlayer();
		}

		previousDice = dice;
	}
	
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	
	if (gamePlaying) {
		scores[activePlayer] += roundScore;

		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		if (scores[activePlayer] >= 20) {
			document.getElementById('name-' + activePlayer).textContent ='Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
	}

});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		// document.querySelector('#current-' + activePlayer).textContent = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}


function init() {
		scores = [0, 0];
		roundScore = 0;
		activePlayer = 0;
		document.querySelector('.dice').style.display = 'none';

		document.getElementById('score-0').textContent = 0;
		document.getElementById('score-1').textContent = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');

		document.getElementById('name-0').textContent ='PLAYER 0';
		document.getElementById('name-1').textContent ='PLAYER 1';

}

//Code Challeges

