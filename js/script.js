const personaje = document.getElementById("formPersonaje")
const search = document.getElementById('personajes')
const infor = document.getElementById('infoDePersoanje')

personaje.addEventListener('submit', (e) => {
    e.preventDefault()
    const dataForm = new  FormData(e.target)
    
    fetch (`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${dataForm.get("personaje")}&ts=1&apikey=94d0ea7fede70d1a67756b92ea7dafbb&hash=cd1e01f6b6bdd8e672b03af968478934`)
    .then(response => response.json())
    .then(json => {
        json.data.results.map (item =>{
         search.innerHTML += `
         <div class="col-md-6 m-auto p-2 ">
            <div class="h-100 m-auto p-5 text-bg-dark rounded-3">
                <p class="  h2 border-4 text-center border-bottom border-white h2">Nombre ${item.name} </p>
                <div class="text-center">
                 <img class="rounded imagen" src="${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}" alt="img" >
                </div>
            </div>
         </div>`
            console.log(item)
        })
        
        }); 

       
    });

    

  