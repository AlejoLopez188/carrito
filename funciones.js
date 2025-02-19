const menus = [{nombre: "Inicio", url: "index.html"},
            {nombre: "¿Quienes somos?", url: "quienes.html"},
            {nombre: "Contacto", url: "contacto.html"},
            {nombre: "Carrito", url: "carrito.html"},
]

function cargarmenu() {
    let enlaces = document.getElementById("ulmenu")
    for (const menu of menus) {
        let lista = document.createElement("li")
        lista.innerHTML =`<a href=${menu.url}>${menu.nombre}</a>`;
        enlaces.appendChild(lista);
    }
}
cargarmenu() 

const productos = [
    { 
      id: 1,
      nombre: "Reel Red Fish - SD 6000",
      urlImagen: "img/reel.png",
      precio: 30000,
      descripcion: "Reel de pesca modelo SD 6000, con capacidad de 200mts del 0.40 y 20kg de arrastre.",
      stock: 15
    },
    {
      id: 2,
      nombre: "Caña Red Fish",
      urlImagen: "img/caña2.png",
      precio: 50000,
      descripcion: "Compuesta por grafito, 2.10mts de dos tramos con carga de 7kg.",
      stock: 8
    },
    {
      id: 3,
      nombre: "Gavetero Red Fish",
      urlImagen: "img/gavetero.jpg",
      precio: 15000,
      descripcion: "Gavetero divisor para señuelos.",
      stock: 25
    },
    {
      id: 4,
      nombre: "Pistola Vigor Red Fish",
      urlImagen: "img/pistola.png",
      precio: 60000,
      descripcion: "",
      stock: 12
    },
    {
      id: 6,
      nombre: "Caja de pesca Red Fish",
      urlImagen: "img/caja.jpg",
      precio: 20000,
      descripcion: "Caja de pesca doble gaveta con capacidad de 5lts.",
      stock: 30
    },
    {
      id: 7,
      nombre: "Tanza monofilamento",
      urlImagen: "img/tanza.jpg",
      precio: 6000,
      descripcion: "Tanza del 0.90 400mts",
      stock: 20
    },
    {
      id: 8,
      nombre: "Señuelos Red Fish ",
      urlImagen: "img/señuelos.jpg",
      precio: 4500,
      descripcion: " ",
      stock: 10
    },
   
  ];
  
  function cargarproductos() {
    let enlaces = document.getElementById("boxproductos")
    for (const producto of productos) {
        let lista = document.createElement("div")
        lista.innerHTML =`  <h3>${producto.nombre}</h3>
                            <img src=${producto.urlImagen} alt="" width="100">
                            <p>${producto.precio}</p>
                            <button onclick="verdetalle('${producto.id}')">Detalles</button>
                        `;
        enlaces.appendChild(lista);
    }
}
cargarproductos()

function verdetalle(idproducto) {
  const buscarProducto = productos.find(producto => producto.id === parseInt(idproducto));
  const enJSON    = JSON.stringify(buscarProducto);
  localStorage.setItem("detalleproducto", enJSON)
  window.location.href="detalle.html"
}
function actualizarContadorCarrito() {
  console.log("Updating the cart counter...");
}