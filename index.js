let card1 = document.getElementById('card1');
let shuffleArray = [];
let cardContainer = document.getElementById('card-container');
let score = document.getElementById('score');

const shuffle = (array) => {
    console.log(array)
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 

const myArray = ["Apple", "Banana",  "Grape", "Cherry", "Kiwi", "Peach", "Pineapple", "Mango", "Orange"]

let item1 = null;
let item2 = null;
let value = 0;


// bug: click fast
function compare() {
    let content1 = item1.children[1].textContent;
    let content2 = item2.children[1].textContent;
    
    
    setTimeout(function() {
        //your code to be executed after 1 second
        if(content1 !== content2) {
            item1.children[0].style.display = "block";
            item2.children[0].style.display = "block";
        } 
        else {
            value += 1;
            score.textContent = value;

        }
        item1 = null;
        item2 = null;  
        
    }, 500);
    
}

function init() {
    let combineArray = myArray.concat(myArray); 
    shuffleArray = shuffle(combineArray);

    for(let i = 0; i < shuffleArray.length; i++) {
        let newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.id = 'card'+i+1;

        // Create a new div with class 'hidden-card'
        let hiddenCard = document.createElement('div');
        hiddenCard.className = 'hidden-card';

        // Create a new p with class 'content'
        let content = document.createElement('p');
        content.className = 'content';
        content.textContent = shuffleArray[i];

        // Append hiddenCard and content to newCard
        newCard.appendChild(hiddenCard);
        newCard.appendChild(content);

        newCard.addEventListener('click', function() {
            //apply style display none
            let hiddenCard = this.children[0];
            hiddenCard.style.display = 'none';

            if(item1 && item2) {
                console.log('both not empty')
                return;
            }
            if(item1 == null) {
                item1 = this;
            } else {
                if(item2 == null) {
                    item2 = this;
                }
            }
            if(item1 && item2) {
                compare()
                
            }
        })
        cardContainer.appendChild(newCard);
    }
}
init()