const carrito = [];
let contenedor = document.getElementById("misprods");

obtenerProductos()
ObtenerJuegoRandom()

/***********************FUNCIONES!!************************************************ */
function renderizarJuegos(Juego){
  console.log(Juego.Games[0]);
  let insertarProds=document.getElementById('SeccionProd');
  let nombreProds = document.createElement('h2');
  nombreProds.innerHTML = Juego.Games[0].strDrink;
  insertarJuegos.appendChild(nombreJuego);

  let imagen=document.createElement('img');
  imagen.src=Juego.Games[0].strGamesThumb;
  insertars.appendChild(imagen);
}

function renderizarProductos() {
  for (const producto of productos){
    contenedor.innerHTML += `
    <div class="card col-sm-2">
        <img class="card-img-top" src="${producto.foto}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${producto.id}</h5>
            <p class="card-text">${producto.nombre}</p>
            <p class="card-text"> $ ${producto.precio}</p>
            <button id="btn${producto.id}" class="btn btn-primary"> comprar </button>
        </div>
    </div>
    `;
  }

  /***********************************************EVENTOS*********************************** */
  productos.forEach((producto) => {
    document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
        agregarAlCarrito(producto);
      });
  });
}


function agregarAlCarrito(productoAComprar) {
  carrito.push(productoAComprar);
  console.table(carrito);
  swal({
    title: "Producto " + productoAComprar.nombre,
    text: "agregado al carrito",
    icon: "success",
  });
  document.getElementById("tablabody").innerHTML += `
    <tr>
        <td>${productoAComprar.id}</td>
        <td>${productoAComprar.nombre}</td>
        <td>${productoAComprar.precio}</td>
    </tr>
    `;

    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////APIS DE PRODUCTOS RANDOMS/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function ObtenerJuegoRandom(){
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
      'X-RapidAPI-Key': 'e228968012mshf18b4245d586f2ep10a07bjsn602d04301127',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}
/*************************************************OBTENGO PRODUCTOS DE jSON******************************************************************** */
async function obtenerProductos() {
  const URLJSON="./producto.json";
  const resp = await fetch(URLJSON);
  const data = await resp.json();
  productos = data;
  renderizarProductos();
}


/**DARK MODE**/

// boton para cambiar el tema de la pagina y guardar el resultado en el storage local //
botonTema.onclick=()=>{

  if(tema=="claro"){
      document.body.className="oscuro";
      botonTema.innerText="Modo Claro";
      tema="oscuro";
      estiloCarta = "estilo-carta-oscuro";
      localStorage.setItem("modo-oscuro","true");
  }
  else{
      document.body.className = "claro";
      botonTema.innerText = "Modo Oscuro";
      tema = "claro";
      estiloCarta = "estilo-carta-claro";
      localStorage.setItem("modo-oscuro","false");
  }

}



// compruebo en el storage local si el modo oscuro esta seleccionado //
if (localStorage.getItem("modo-oscuro") === "true") {
  document.body.className="oscuro";
  botonTema.innerText="Modo Claro";
  tema="oscuro";
  estiloCarta = "estilo-carta-oscuro";
}else{
  document.body.className = "claro";
  botonTema.innerText = "Modo Oscuro";
  tema = "claro";
  estiloCarta = "estilo-carta-claro";
}

