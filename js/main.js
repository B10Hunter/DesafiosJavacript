class User {
    constructor (username,email,password){
        this.username = username
        this.email = email
        this.password = password
        
    }
    
}

const persona  = []

const form = document.getElementById('idform')

form.addEventListener('submit', (event) => {
       event.preventDefault()
      
       let username = document.getElementById('idNombre').value
       let email = document.getElementById('idEmail').value
       let password = document.getElementById('idContra').value

       const user = new User (username, email ,password)
       persona.push (user)
       console.log(persona)
})
 const imagen = document.getElementById ('img')

 imagen.innerHTML += `
    <div class ="centrado">
     <img  src="./img/1f60a.png" alt="img">
     </div>
 `
   
