let carrito = [];

function mostrarProductos(){

const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {

catalogo.innerHTML += `
<div class="producto">
<img src="${producto.imagen}" width="100">
<h3>${producto.nombre}</h3>
<p>$${producto.precio}</p>
</div>
`;

});

}


mostrarProductos();