// TODO 1
[array[i], array[j]] = [array[j], array[i]];

// TODO 2
item1 = null;
item2 = null;

// TODO 3
setTimeout(function() {
    card1.children[0].style.display = 'block';
    card2.children[0].style.display = 'block';
    item1 = null;
    item2 = null;
}, 500);

// TODO 4
let combineArray = myArray.concat(myArray);
let shuffleArray = shuffle(combineArray);

// TODO 5, 6, 7
let newCard = document.createElement('div');
newCard.className = 'card';

let hiddenCard = document.createElement('div');
hiddenCard.className = 'hidden-card';

let content = document.createElement('p');
content.className = 'content';
content.textContent = shuffleArray[i];

// TODO 8
if (item1 === null) {
    item1 = this;
} else {
    item2 = this;
    compare(item1, item2);
}