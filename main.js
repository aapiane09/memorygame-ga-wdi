/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
if (cardOne === cardTwo || cardThree === cardFour) {
  alert('You found a match!');
}
else {
  alert('Sorry, try again.')
}

	cards[0].innerHTML = '<img src="hearts-884201_1280.png" alt:"Queen of Hearts" />';
	cards[1].innerHTML = '<img src="clubs-884198_1280.png" alt:"Queen of Clubs" />';
	cards[2].innerHTML = '<img src="clubs-884194_1280.png" alt:"King of Clubs" />';
	cards[3].innerHTML = '<img src="hearts-884196_1280.png" alt:"King of Hearts" />';

//WORKING CODE
var createCards = function() {
  for(var i = 0; i < cards.length; i++){
  var cardDiv = document.createElement("div");
  cardDiv.className = "Card";
  gameboard.appendChild(cardDiv);
  }
}

*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [ ];
var board = document.getElementById('gameboard');
var cardDiv;


var createCards = function() {
  for(var i = 0; i < cards.length; i++){
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.setAttribute('data-card', cards[i]);
  cardDiv.addEventListener('click', isTwoCards)
  gameboard.appendChild(cardDiv);
  }
};

var isMatch = function() {
	if (cards[0] === cards[1]) {
  alert('You found a match!');
}
else {
  alert('Sorry, try again.')
}
};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
	//Copied and pasted the answers that used 'this' as it was not gone over at all in prework
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
}
};

createCards();