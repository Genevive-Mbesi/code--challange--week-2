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
    <p>
    $<span class ="vote-count">${animal.votes}</span> Voted
    </p>
    <p>${animal.description}</p>
    <div class ="buttons">
    <button> Voted </button>
    </div>
    
    `
//Add animal to DOM
    
    document.querySelector('#characters-list').appendChild(myList)

    
}

// Get Data and Render our animals to DOM
 
function initialize() {
    getData()
}
initialize()
















