const lista = document.getElementById("listaProductos");
const form = document.getElementById("formProducto");
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabName) {
                content.classList.add('active');
            }
        });
    });
});

function mostrarProductos() {
    lista.innerHTML = "";

    productos.forEach((producto, index) => {
        const div = document.createElement("div");
        div.className = "producto";
        
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100" onerror="this.src='./imagenes/placeholder.jpg'">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toFixed(2)}</p>
            <button onclick="eliminarProducto(${index})" 
                    style="background-color: #c72727; 
                           color: white; 
                           border: none; 
                           padding: 0.3rem 0.7rem; 
                           cursor: pointer; 
                           font-size: 1rem; 
                           font-weight: bold; 
                           box-shadow: 0 3px 5px rgba(0,0,0,0.2);
                           min-width: 30px;
                           min-height: 30px;
                           display: flex;
                           align-items: center;
                           justify-content: center;
                           margin: 0 auto;">
                ✕
            </button>
        `;
        
        lista.appendChild(div);
    });
}

function eliminarProducto(index) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        productos.splice(index, 1);
        mostrarProductos();
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: parseFloat(precio),
        imagen: imagen
    };

    productos.push(nuevoProducto);
    mostrarProductos();
    form.reset();
});

mostrarProductos();