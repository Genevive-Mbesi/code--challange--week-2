//Fetch Request

function getData(){
    fetch('http://localhost:3000/characters')
    .then (res => res.json())
    .then(animalData => animalData.forEach(animals =>renderOneCharacter(animals)) )
}

// DOM render function

function renderOneCharacter(animal){

//Build animal

    let myList = document.createElement('li')
    myList.className = 'myList'
    myList.innerHTML =`
    <img src ="${animal.image}">
    <h4>${animal.name}</h4>
    <p id="votes-${animal.id}">${animal.votes}</p>
    <div class ="buttons">
    <button class="vote" data-animal-id="${animal.id}">Voted</button>
    </div>
    
    `
    // Add event listener to the "Voted" button
  const voteButton = myList.querySelector('.vote');
  voteButton.addEventListener('click', () => handleVoteClick(animal.id));




//Add animal to DOM
    
    document.querySelector('#characters-list').appendChild(myList)

    

    
}

// Vote button click handler
function handleVoteClick(animalId) {
    const votesElement = document.querySelector(`#votes-${animalId}`);
    const votesCount = parseInt(votesElement.textContent);
    votesElement.textContent = votesCount + 1;
  }


// Get Data and Render our animals to DOM
 
function initialize() {
    getData()
}
initialize()



