/*Cosas para la barra de navegacion. 
Quiero que cuando haga un click en el ancla se desplegue un sub menu. Para ello seleccionamos la etiqueta disparadora, y con un addeventlistener cuando haga click cambie un display none a bloc para que se muestre. Para ello accedemos a las propiedades de css y colocamos un condicional que dice que si display es igual a none cambie a block y si es igual a block cambie a none. 

*/


const barraNavegacion = document.querySelectorAll(".menuItem");

// Recorremos cada elemento de la lista y le agregamos el eventListener
barraNavegacion.forEach(function(item) {
    item.addEventListener("mouseout", function() {
        // Evento cuando el mouse entra (muestra el submenu)
        item.addEventListener("mouseover", function() {
            const submenu = this.querySelector(".menuAdentro");
            submenu.style.display = "block"; // Mostramos el submenu
        });
        // Evento cuando el mouse sale (oculta el submenu)
        item.addEventListener("mouseout", function() {
            const submenu = this.querySelector(".menuAdentro");
            submenu.style.display = "none"; // Ocultamos el submenu
        });    
    });
});



// Seccion de juegos. 


const botonPiedra  = document.getElementById("botonPiedra")
const botonPapel = document.getElementById("botonPapel")
const botonTijeras = document.getElementById("botonTijeras")

const piedra = "piedra"
const papel = "papel"
const tijeras = "tijeras"

botonPiedra.addEventListener("click", function(){
    play(piedra)
});

botonPapel.addEventListener("click", function(){
    play(papel)
});

botonTijeras.addEventListener("click",function(){
    play(tijeras)
});


function play(eleccionUsuario){
    


}


function eleccionMaquina (){
    const numeroRandom = Math.floor(Math.random()*3)
    switch(numeroRandom){
        case 0: return "Piedra"
        case 1: return "Papel" 
        case 2: return "Tijera"
    }
}
