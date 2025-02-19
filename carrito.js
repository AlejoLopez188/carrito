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

let productocarritos = JSON.parse(localStorage.getItem("carrito"));

function cargarcarrito() {
    let enlaces = document.getElementById("tablacarrito");
    let total = 0;

    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");
        lista.id = `${productocarrito.id}`;
        const subtotal = productocarrito.cantidad * productocarrito.precio;
        total += subtotal;

        lista.innerHTML = `
            <td><img src="${productocarrito.urlImagen}" width="40px"></td>
            <td>${productocarrito.cantidad}</td>
            <td>${productocarrito.nombre}</td>
            <td>${productocarrito.precio}</td>
            <td>${subtotal}</td>
            <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">x</button></td>
        `;
        enlaces.appendChild(lista);
    }

    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="4" style="text-align:right;"><strong>Total:</strong></td>
        <td colspan="2"><strong>$${total}</strong></td>
    `;
    enlaces.appendChild(totalRow);
}

function eliminarproducto(id) {
    productocarritos = productocarritos.filter(producto => producto.id !== parseInt(id));
    const enJSON = JSON.stringify(productocarritos);
    localStorage.setItem("carrito", enJSON);
    
    document.getElementById("tablacarrito").innerHTML = "";
    
    cargarcarrito();
    actualizarContadorCarrito();
}

function finalizar() {
    alert("Finalizando la compra...")
}

cargarcarrito();

function actualizarContadorCarrito() {
    console.log("Updating the cart counter..."); 
  }