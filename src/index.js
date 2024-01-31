document.addEventListener('DOMContentLoaded', () => {

    //fetch data from db.json file
    const getDoggies = () => {
        fetch('http://localhost:3000/pups')
        .then(r=>r.json())
        .then(dogs => {
            dogs.map((dog) => renderNames(dog))
        })
    }

getDoggies()

//add to <span>name of pup</span> to div#dog-bar
    const renderNames = (dog) => {
        let div = document.getElementById('dog-bar')
        let span = document.createElement('span')
        span.textContent = `${dog.name}`
        div.appendChild(span)
    }

})