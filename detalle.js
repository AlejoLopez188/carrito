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

let productodetalle = JSON.parse(localStorage.getItem("detalleproducto"))

function cargarproducto() {
    let enlaces = document.getElementById("boxproductos")
        let lista = document.createElement("div")
        lista.innerHTML =`  <div class="boxdetalle">
                                <div>
                                    <h3>${productodetalle.nombre}</h3>
                                    <img src=${productodetalle.urlImagen} alt="" width="200">
                                </div>
                                <div class="boxdescripcion">    
                                    <p class="precio">$ ${productodetalle.precio}</p>
                                    <p>${productodetalle.descripcion}</p>
                                    <div class="boxcontador">
                                        <button onclick="sumar()">+</button>
                                        <p id="contarproducto">0</p>
                                        <button onclick="restar()">-</button>
                                    </div>
                                    <button onclick="cargarcarrito()">Cargar al carrito</button>
                                </div>
                                
                            </div>
                        `;
        enlaces.appendChild(lista);
}
cargarproducto()
let contador = 0;

function sumar() {
    let nstock = productodetalle.stock
    if (contador<nstock) {
        contador++
        document.getElementById("contarproducto").innerHTML = contador;
    } else {
        alert("Stock máximo de producto")
    }
}

function restar() {
    if (contador>0) {
        contador--
        document.getElementById("contarproducto").innerHTML = contador;
    } 
    
}

function cargarcarrito() {
    if (contador==0) {
        alert("Por favor, ingrese la cantidad de productos deseados.")
    }else{
        let carrito =  JSON.parse(localStorage.getItem("carrito"))
        if (carrito === null) {
            carrito = []; 
        }
        cantidadproducto = document.getElementById("contarproducto").innerHTML;
        productonuevo ={id: productodetalle.id,
             nombre: productodetalle.nombre,
              cantidad: cantidadproducto, 
              precio: productodetalle.precio, 
              urlImagen: productodetalle.urlImagen
             }
        carrito.push(productonuevo);
        const enJSON    = JSON.stringify(carrito);
        localStorage.setItem("carrito", enJSON)
        window.location.href="carrito.html"
    }
}

actualizarContadorCarrito();