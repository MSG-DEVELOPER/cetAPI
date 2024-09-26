// a donde me quiero conectar (endpoint)
const pokemon = "https://pokeapi.co/api/v2/pokemon/1";
const nombre = document.getElementById("nombre_pokemon");
const imgFront = document.getElementById("front");
const imgBack = document.getElementById("back");

//connectem amb aquest endpoint amb el fetch
// convertim la resposta (que és text pla) en json
// i desprès tractem aquesta resposta (data). Què volem mostrar?
fetch(pokemon)
.then((response) => response.json())
.then((data) => {
llamarFuera(data);
//console.log(data); //todos los datos recibidos, en formato JSON
console.log(data.base_experience);
nombre.innerHTML = data.forms[0].name.toUpperCase(); //acceder y mostrar el nombre
//nombre.innerHTML = data.sprites.front_default;
imgFront.src= data.sprites.front_default;
imgBack.src = data.sprites.back_default;
})
.catch((err) => console.error(err, "no hemos podido realizar la conexión"));

// funcion que recibe los datos
function llamarFuera(data){
console.log("*** desde la funcion ***")
console.log(data);
}