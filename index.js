// Fetch Request
function getData() {
    fetch('http://localhost:3000/characters')
      .then(res => res.json())
      .then(animalData => animalData.forEach(animal => renderOneCharacter(animal)))
  }
  
  // DOM render function
  function renderOneCharacter(animal) {
    // Build animal
    let myList = document.createElement('li');
    myList.className = 'myList';
    myList.innerHTML = `
      <h4 class="animal">${animal.name}</h4>
      <div class="animal-details" style="display: none;">
        <img src="${animal.image}">
        <p id="votes-${animal.id}">${animal.votes}</p>
        <div class="buttons">
          <button class="vote" data-animal-id="${animal.id}">Voted</button>
        </div>
      </div>`;
  
    // Add event listener to toggle animal details
    const animalName = myList.querySelector('.animal');
    animalName.addEventListener('click', function () {
      const animalDetails = animalName.nextElementSibling;
      animalDetails.style.display = animalDetails.style.display === 'block' ? 'none' : 'block';
    });
  
    // Add event listener to the "Voted" button
    const voteButton = myList.querySelector('.vote');
    voteButton.addEventListener('click', function () {
      handleVoteClick(animal.id);
    });
  
    // Add animal to DOM
    const charactersList = document.querySelector('#characters-list');
    charactersList.appendChild(myList);
  }
  
  // Vote button click handler
  function handleVoteClick(animalId) {
    const votesElement = document.querySelector(`#votes-${animalId}`);
    const votesCount = parseInt(votesElement.textContent);
    votesElement.textContent = votesCount + 1;
  }
  
  // Get Data and Render our animals to DOM
  function initialize() {
    getData();
  }
  initialize();
  