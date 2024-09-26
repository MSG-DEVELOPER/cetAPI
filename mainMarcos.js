//DECLARAMOS VARIABLES GLOBALES A PRINCIPIO DE CODIGO

const nameCharacter= document.getElementById("nameCharacter");
const imagen = document.getElementById("imagen");
const ki = document.getElementById("ki");





//A DONDE ME QUIERO CONECTAR (END POINT)


const corPetit = "https://dragonball-api.com/api/characters/3";

//******** 

//CONECTAMOS CON ESTE ENDPOINT MEDIANTE EL FETCH

fetch(corPetit)
    .then((response) => response.json())
    .then((data) => {
       

        nameCharacter.innerHTML=data.name;
        imagen.src= data.image;
        ki.innerHTML= data.ki;

        //CREAMOS EVENTOS  PARA MOVERSE POR LOS NIVEVLES
        document.getElementById("level2").addEventListener("click" , upLevel2);
        document.getElementById("level3").addEventListener("click" , upLevel3);
        document.getElementById("level1").addEventListener("click" , upLevel1);

        //CON ONCLICK SOLO ME FUNCIONA FUERA DEL FETCH
       //FUNCIONES QUE CAMBIAN IMAGEN Y KI EN FUNCION DEL NIVEL
       
        function upLevel1(){
            imagen.src= data.image;
            ki.innerHTML= data.ki;
         }
       
       
        function upLevel2(){
            imagen.src= data.transformations[0].image;
            ki.innerHTML=data.transformations[0].ki;


        }

        function upLevel3(){
            imagen.src= data.transformations[1].image;
            ki.innerHTML=data.transformations[1].ki;


        }


}
)




