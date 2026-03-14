
let historialCompras = [];


function cargarHistorial() {
    const historialGuardado = localStorage.getItem('historialCompras');
    if (historialGuardado) {
        historialCompras = JSON.parse(historialGuardado);
    }
    mostrarHistorial();
}

function mostrarHistorial() {
    const contenedor = document.querySelector('.historial-contenedor');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    if (historialCompras.length === 0) {
        contenedor.innerHTML = '<p style="text-align: center; color: #666; padding: 1rem;">No hay compras en el historial</p>';
        return;
    }
    
    historialCompras.forEach(compra => {
        const diaCompra = document.createElement('div');
        diaCompra.className = 'dia-compra';
        
      
        const diaHeader = document.createElement('div');
        diaHeader.className = 'dia-header';
        diaHeader.innerHTML = `
            <span class="dia-fecha">${compra.fecha}</span>
            <span class="dia-total">Total: $${compra.total.toFixed(2)}</span>
        `;
        
     
        const diaLista = document.createElement('ul');
        diaLista.className = 'dia-lista';
        
        compra.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="producto-nombre">${item.nombre}</span>
                <span class="producto-cantidad">x${item.cantidad}</span>
                <span class="producto-precio">$${(item.precio * item.cantidad).toFixed(2)}</span>
            `;
            diaLista.appendChild(li);
        });
        
        diaCompra.appendChild(diaHeader);
        diaCompra.appendChild(diaLista);
        contenedor.appendChild(diaCompra);
    });
}

function agregarCompraHistorial(nuevaCompra) {
  
    historialCompras.unshift(nuevaCompra);
    
  
    if (historialCompras.length > 20) {
        historialCompras.pop();
    }
    
    
    localStorage.setItem('historialCompras', JSON.stringify(historialCompras));
    
   
    mostrarHistorial();
    

    const contenedor = document.querySelector('.historial-contenedor');
    if (contenedor) {
        contenedor.scrollTop = 0;
    }
}


document.addEventListener('DOMContentLoaded', cargarHistorial);