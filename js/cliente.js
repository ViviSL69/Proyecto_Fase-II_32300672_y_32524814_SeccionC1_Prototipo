let carrito = [];

function mostrarProductos(){
    const catalogo = document.getElementById("catalogo");
    if (!catalogo) return;

    catalogo.innerHTML = '';
    
    productos.forEach(producto => {
        catalogo.innerHTML += `
        <div class="producto">
            <img src="${producto.imagen}" width="100" height="100" style="object-fit: cover;" onerror="this.src='./imagenes/placeholder.jpg'">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">
                Añadir al carrito
            </button>
        </div>
        `;
    });
}

function agregarAlCarrito(id){
    const producto = productos.find(p => p.id === id);
    
  
    const productoExistente = carrito.find(item => item.id === id);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
}

function actualizarCarrito(){
    const lista = document.getElementById("carrito");
    const contador = document.getElementById("contador");
    const totalElemento = document.getElementById("total");

    if (!lista) return;
    
    lista.innerHTML = "";
    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;
        cantidadTotal += producto.cantidad;
        
        lista.innerHTML += `
        <li>
            <span>${producto.nombre} x${producto.cantidad} - $${subtotal.toFixed(2)}</span>
            <button onclick="eliminarDelCarrito(${index})" class="btn-eliminar">
                ✕
            </button>
        </li>
        `;
    });

    contador.textContent = cantidadTotal;
    totalElemento.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index){
    const producto = carrito[index];
    
    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
    } else {
        carrito.splice(index, 1);
    }
    
    actualizarCarrito();
}
function pagar() {
    const mensaje = document.getElementById("mensaje");
    
    if (carrito.length === 0) {
        mostrarMensaje(mensaje, "El carrito está vacío", "#f8d7da", "#842029");
        return;
    }
    
    const fechaActual = new Date();
    const opcionesFecha = { day: '2-digit', month: 'short', year: 'numeric' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFecha).replace(/ /g, ' ');
    
    const nuevaCompra = {
        fecha: fechaFormateada,
        total: parseFloat(document.getElementById("total").textContent),
        items: carrito.map(item => ({
            nombre: item.nombre,
            cantidad: item.cantidad,
            precio: item.precio
        }))
    };
    
    if (typeof agregarCompraHistorial === 'function') {
        agregarCompraHistorial(nuevaCompra);
    }
    
    mostrarMensaje(mensaje, `¡Compra realizada! Total: $${nuevaCompra.total.toFixed(2)}`, "#c8e6c9", "#1b5e20");
    
    carrito = [];
    actualizarCarrito();
}

function mostrarMensaje(elemento, texto, colorFondo, colorTexto) {
    elemento.innerHTML = texto;
    elemento.style.backgroundColor = colorFondo;
    elemento.style.color = colorTexto;
    elemento.style.padding = "1rem";
    elemento.style.borderRadius = "8px";
    elemento.style.textAlign = "center";
    elemento.style.fontWeight = "bold";
    elemento.style.marginTop = "1rem";
    elemento.style.display = "block";
    
    setTimeout(() => {
        elemento.style.display = "none";
    }, 3000);
}

document.addEventListener('DOMContentLoaded', mostrarProductos);