function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let totalProductos = carrito.reduce((acc, producto) => acc + parseInt(producto.cantidad), 0);
    document.getElementById("contador").innerText = totalProductos;
}
actualizarContadorCarrito();