let url = "https://rickandmortyapi.com/api/character/2"

fetch (url)
.then((data)=>{
    data.json()
    .then((json)=>{
        console.log(json)
        alert(json.name)
        
    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((error)=>{
    console.log(error)

})