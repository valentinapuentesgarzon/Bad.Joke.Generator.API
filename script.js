//buscamos los elementos en el html y los guardamos en las const
const jokeBtn = document.getElementById("jokeBtn")
const jokeEl = document.getElementById("joke")

//Creamos el evento que cambiara la joke cuando se de click
jokeBtn.addEventListener("click", GenerateJoke) //cada vez que se presione el boton se genera el evento de abajo nuevamente y cambiando el contenido.

//Funcion para ingresar a la api y sacar la joke
async function GenerateJoke(){
    //solicitud a la api para sacar el joke (se declara como asyncrona para poder usar el await)
    const res = await fetch("https://icanhazdadjoke.com",{
        headers:{
            "Accept": "application/json"
        }
    })
    //guardamos la respuesta de la petición de arriba dentro de data (sera como si fuera un array)
    const data = await res.json()
    //imprimimos en la consola el array que contiene la petición (no es necesario pero es para visualizarlo)
    console.log(data)
    //con el innerhtml remplazamos el contenido de el div con la id Joke por el valor joke del array data.
    jokeEl.innerHTML = data.joke
}

