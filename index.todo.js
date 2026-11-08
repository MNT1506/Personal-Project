// index.js - Ultra-Clean Student Worksheet (Only 2 State Variables!)

let cardContainer = document.getElementById('card-container');
const myArray = ["Apple", "Banana", "Grape", "Cherry", "Kiwi", "Peach", "Pineapple", "Mango", "Orange"];

// Minimal State Variables
let item1 = null;
let item2 = null;

/**
 * Fisher-Yates Shuffle Algorithm
 */
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        
        // TODO 1: Swap elements at index i and index j
        // Write array swapping logic here...

    } 
    return array; 
}; 

/**
 * Compares two selected cards and handles match checking
 */
function compare(card1, card2) {
    let content1 = card1.children[1].textContent;
    let content2 = card2.children[1].textContent;

    if (content1 === content2) {
        // TODO 2: If cards match, immediately reset item1 and item2 back to null
        // Write match logic here...

    } else {
        // TODO 3: If cards do NOT match:
        // Use setTimeout (500ms) to hide both cards again (style.display = 'block')
        // and then reset item1 and item2 back to null INSIDE the setTimeout
        // Write non-match timer logic here...

    }
}

/**
 * Game Setup
 */
function init() {
    // TODO 4: Duplicate myArray into combineArray and call shuffle()
    let combineArray = /* Your code here */;
    let shuffleArray = /* Your code here */;

    cardContainer.innerHTML = ''; 

    for (let i = 0; i < shuffleArray.length; i++) {
        // TODO 5: Create card <div> with class 'card'
        let newCard = /* Your code here */;

        // TODO 6: Create hidden overlay <div> with class 'hidden-card'
        let hiddenCard = /* Your code here */;

        // TODO 7: Create text <p> with class 'content' and textContent shuffleArray[i]
        let content = /* Your code here */;

        newCard.appendChild(hiddenCard);
        newCard.appendChild(content);

        // Click Handler
        newCard.addEventListener('click', function() {
            // Guard 1: Block clicks if two cards are currently being compared
            if (item1 && item2) return;

            // Guard 2: Prevent clicking the same card twice
            if (this === item1) return;

            // Reveal clicked card
            this.children[0].style.display = 'none';

            // TODO 8: Card Selection Logic
            // - If item1 is null: set item1 = this
            // - Otherwise: set item2 = this and call compare(item1, item2)
            // Write your selection logic here...

        });

        cardContainer.appendChild(newCard);
    }
}

init();