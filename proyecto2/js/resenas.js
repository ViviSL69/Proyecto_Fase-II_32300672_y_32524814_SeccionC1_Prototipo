let resenas = [];

function cargarResenas() {
  
    resenas = [
        {
            id: 1,
            productoId: 1,
            usuario: "María González",
            calificacion: 5,
            comentario: "Excelente café, muy aromático y bien caliente.",
            fecha: "2026-03-09T10:30:00.000Z"
        },
        {
            id: 2,
            productoId: 2,
            usuario: "José Pérez",
            calificacion: 4,
            comentario: "La empanada estaba buena, el sabor es excelente.",
            fecha: "2026-03-08T15:20:00.000Z"
        },
        {
            id: 3,
            productoId: 3,
            usuario: "Carlos Rodríguez",
            calificacion: 5,
            comentario: "El jugo Yukipak es refrescante y natural.",
            fecha: "2026-03-08T11:45:00.000Z"
        },
        {
            id: 4,
            productoId: 4,
            usuario: "Ana Martínez",
            calificacion: 5,
            comentario: "El mejor sandwich del campus, ingredientes frescos.",
            fecha: "2026-03-07T12:15:00.000Z"
        },
        {
            id: 5,
            productoId: 5,
            usuario: "Laura Sánchez",
            calificacion: 5,
            comentario: "Brownie delicioso, suave y con mucho chocolate.",
            fecha: "2026-03-06T16:30:00.000Z"
        },
        {
            id: 6,
            productoId: 6,
            usuario: "Miguel Torres",
            calificacion: 4,
            comentario: "Coca-Cola bien fría, como debe ser.",
            fecha: "2026-03-05T14:10:00.000Z"
        }
    ];

    localStorage.setItem('resenas', JSON.stringify(resenas));
    mostrarResenas();
}

function mostrarResenas() {
    const contenedor = document.getElementById('listaResenas');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    resenas.forEach((resena, index) => {
        const producto = productos.find(p => p.id === resena.productoId);
        const nombreProducto = producto ? producto.nombre : 'Producto no disponible';
        
        const resenaDiv = document.createElement('div');
        resenaDiv.className = 'resena-item';
        
        const fecha = new Date(resena.fecha);
        const fechaFormateada = fecha.toLocaleDateString('es-ES', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
        });
        
        resenaDiv.innerHTML = `
            <div class="resena-header">
                <span class="resena-usuario">${resena.usuario}</span>
                <span class="resena-fecha">${fechaFormateada}</span>
                <div class="resena-estrellas">${'⭐'.repeat(resena.calificacion)}</div>
            </div>
            <p class="resena-texto">${resena.comentario}</p>
            <div class="resena-producto">${nombreProducto}</div>
            <button onclick="eliminarResena(${index})" class="btn-eliminar-resena">Eliminar</button>
        `;
        
        contenedor.appendChild(resenaDiv);
    });
}

function eliminarResena(index) {
    if (confirm('¿Eliminar esta reseña?')) {
        resenas.splice(index, 1);
        mostrarResenas();
    }
}

document.addEventListener('DOMContentLoaded', cargarResenas);