function getData(){
    fetch('http://localhost:3000/characters')
    .then (res => res.json())
    .then(animalData => animalData.forEach(animals =>renderOneCharacter(animals)) )
}

function renderOneCharacter(animal){
    let myList = document.createElement('li')
    myList.className = 'myList'
    myList.innerHTML =`
    <img src ="${animal.image}">
    
    <h4>${animal.name}</h4>
    <p>
    $<span class ="vote-count">${animal.votes}</span> Voted
    </p>
    <p>${animal.description}</p>
    
    `
    console.log(myList)
    document.querySelector('#characters-list').appendChild(myList)
    
}
 
function initialize() {
    getData()
}
initialize()












