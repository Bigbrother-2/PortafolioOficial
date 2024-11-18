/*Cosas para la barra de navegacion. 
Quiero que cuando haga un click en el ancla se desplegue un sub menu. Para ello seleccionamos la etiqueta disparadora, y con un addeventlistener cuando haga click cambie un display none a bloc para que se muestre. Para ello accedemos a las propiedades de css y colocamos un condicional que dice que si display es igual a none cambie a block y si es igual a block cambie a none. 

*/


const barraNavegacion = document.querySelectorAll(".menuItem");

// Recorremos cada elemento de la lista y le agregamos los eventListeners
barraNavegacion.forEach(function(item) {
    // Evento cuando el mouse entra (muestra el submenu)
    item.addEventListener("mouseover", function() {
        const submenu = this.querySelector(".menuAdentro");
        if (submenu) {
            submenu.style.display = "block"; // Mostramos el submenu
        }
    });

    // Evento cuando el mouse sale (oculta el submenu)
    item.addEventListener("mouseout", function() {
        const submenu = this.querySelector(".menuAdentro");
        if (submenu) {
            submenu.style.display = "none"; // Ocultamos el submenu
        }
    });
});






// Seccion de menu desplegable


const botonDesplegable = document.getElementById("botonDesplegable")
const menuLinks = document.getElementById("menuLinks")
menuLinks.style.display = "none"

botonDesplegable.addEventListener("click", menuDesplegable)

function menuDesplegable (){
    if(menuLinks.style.display === "none"){
        menuLinks.style.display = "flex"
    } else if (menuLinks.style.display ==="flex"){
        menuLinks.style.display = "none"
    }
}
