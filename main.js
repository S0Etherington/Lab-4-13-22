const getResButton = document.querySelector('button')

const buttonClick = (evt) => {
    console.log('Button clicked')
    axios.get("https://swapi.dev/api/planets/?search=alderaan")
        .then((res) => {
            const residents = res.data.results['0'].residents
            for(let i = 0; i < residents.length; i++){
                // console.log(residents[i])
                axios.get(residents[i])
                    .then((res) => {
                        console.log(res.data)
                        let newH2 = document.createElement('h2')
                        newH2.textContent = res.data['name']
                       let body = document.querySelector('body').appendChild(newH2)
                    })
            }
        })
}

getResButton.addEventListener('click', buttonClick)
