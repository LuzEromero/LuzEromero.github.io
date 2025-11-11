// Carrito de Compras - Cana's amor hecho arte

class CarritoCompras {
    constructor() {
        this.carrito = this.cargarCarrito();
        this.inicializar();
    }

    // Cargar carrito desde localStorage
    cargarCarrito() {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    }

    // Guardar carrito en localStorage
    guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        this.actualizarContador();
        this.actualizarVistaCarrito();
    }

    // Inicializar el carrito
    inicializar() {
        this.crearModalCarrito();
        this.actualizarContador();
        this.agregarEventListeners();
    }

    // Agregar producto al carrito
    agregarProducto(id, nombre, precio, imagen = '', cantidad = 1) {
        const productoExistente = this.carrito.find(item => item.id === id);

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            this.carrito.push({
                id,
                nombre,
                precio: parseFloat(precio),
                imagen,
                cantidad
            });
        }

        this.guardarCarrito();
        this.mostrarNotificacion(`${nombre} agregado al carrito`);
    }

    // Eliminar producto del carrito
    eliminarProducto(id) {
        this.carrito = this.carrito.filter(item => item.id !== id);
        this.guardarCarrito();
        this.mostrarNotificacion('Producto eliminado del carrito');
    }

    // Actualizar cantidad de un producto
    actualizarCantidad(id, nuevaCantidad) {
        if (nuevaCantidad <= 0) {
            this.eliminarProducto(id);
            return;
        }

        const producto = this.carrito.find(item => item.id === id);
        if (producto) {
            producto.cantidad = parseInt(nuevaCantidad);
            this.guardarCarrito();
        }
    }

    // Calcular total del carrito
    calcularTotal() {
        return this.carrito.reduce((total, item) => {
            return total + (item.precio * item.cantidad);
        }, 0);
    }

    // Obtener número total de productos
    obtenerTotalProductos() {
        return this.carrito.reduce((total, item) => {
            return total + item.cantidad;
        }, 0);
    }

    // Actualizar contador visual del carrito
    actualizarContador() {
        const cartContainer = document.querySelector('.cart-container');
        if (!cartContainer) return;
        
        const totalProductos = this.obtenerTotalProductos();

        // Eliminar contador anterior si existe
        let contador = cartContainer.querySelector('.contador-carrito');
        if (!contador) {
            contador = document.createElement('span');
            contador.className = 'contador-carrito';
            cartContainer.appendChild(contador);
        }

        // Actualizar contador
        contador.textContent = totalProductos > 0 ? totalProductos : '';
        contador.style.display = totalProductos > 0 ? 'flex' : 'none';
        
        // Forzar repintado para asegurar que los estilos se apliquen
        contador.offsetHeight;
    }

    // Crear modal del carrito
    crearModalCarrito() {
        // Crear el modal
        const modal = document.createElement('div');
        modal.id = 'modalCarrito';
        modal.className = 'modal-carrito';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-carrito-content';

        const header = document.createElement('div');
        header.className = 'modal-carrito-header';

        const titulo = document.createElement('h2');
        titulo.textContent = 'Carrito de Compras';
        titulo.className = 'modal-carrito-titulo';

        const cerrarBtn = document.createElement('button');
        cerrarBtn.innerHTML = '&times;';
        cerrarBtn.className = 'cerrar-carrito';

        header.appendChild(titulo);
        header.appendChild(cerrarBtn);

        const productosContainer = document.createElement('div');
        productosContainer.id = 'productosCarrito';

        const footer = document.createElement('div');
        footer.className = 'carrito-footer';

        const totalContainer = document.createElement('div');
        totalContainer.className = 'carrito-total-container';

        const totalLabel = document.createElement('span');
        totalLabel.textContent = 'Total:';

        const totalPrecio = document.createElement('span');
        totalPrecio.id = 'totalCarrito';
        totalPrecio.textContent = '$0.00';

        totalContainer.appendChild(totalLabel);
        totalContainer.appendChild(totalPrecio);

        const botonesContainer = document.createElement('div');
        botonesContainer.className = 'carrito-botones-container';

        const vaciarBtn = document.createElement('button');
        vaciarBtn.textContent = 'Vaciar Carrito';
        vaciarBtn.className = 'btn-vaciar-carrito';

        const comprarBtn = document.createElement('button');
        comprarBtn.textContent = 'Comprar';
        comprarBtn.className = 'btn-comprar';

        botonesContainer.appendChild(vaciarBtn);
        botonesContainer.appendChild(comprarBtn);

        footer.appendChild(totalContainer);
        footer.appendChild(botonesContainer);

        modalContent.appendChild(header);
        modalContent.appendChild(productosContainer);
        modalContent.appendChild(footer);
        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        // Event listeners del modal
        cerrarBtn.addEventListener('click', () => this.cerrarModal());
        vaciarBtn.addEventListener('click', () => this.vaciarCarrito());
        comprarBtn.addEventListener('click', () => this.realizarCompra());

        // Cerrar al hacer clic fuera del modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.cerrarModal();
            }
        });
    }

    // Actualizar vista del carrito
    actualizarVistaCarrito() {
        const productosContainer = document.getElementById('productosCarrito');
        const totalPrecio = document.getElementById('totalCarrito');

        if (!productosContainer || !totalPrecio) return;

        // Limpiar contenedor
        productosContainer.innerHTML = '';

        if (this.carrito.length === 0) {
            const mensajeVacio = document.createElement('div');
            mensajeVacio.className = 'mensaje-vacio-carrito';
            mensajeVacio.textContent = 'Tu carrito está vacío';
            productosContainer.appendChild(mensajeVacio);
        } else {
            this.carrito.forEach(item => {
                const productoDiv = document.createElement('div');
                productoDiv.className = 'item-carrito';

                // Imagen del producto
                const imagenDiv = document.createElement('div');
                if (item.imagen) {
                    const img = document.createElement('img');
                    img.src = item.imagen;
                    img.alt = item.nombre;
                    img.className = 'item-carrito-imagen';
                    imagenDiv.appendChild(img);
                } else {
                    imagenDiv.className = 'item-carrito-imagen-vacia';
                    imagenDiv.textContent = 'Sin imagen';
                }

                // Información del producto
                const infoDiv = document.createElement('div');
                infoDiv.className = 'item-carrito-info';

                const nombreProducto = document.createElement('div');
                nombreProducto.textContent = item.nombre;
                nombreProducto.className = 'item-carrito-nombre';

                const precioProducto = document.createElement('div');
                precioProducto.textContent = `$${item.precio.toLocaleString('es-CO')} COP`;
                precioProducto.className = 'item-carrito-precio';

                infoDiv.appendChild(nombreProducto);
                infoDiv.appendChild(precioProducto);

                // Controles de cantidad
                const controlesDiv = document.createElement('div');
                controlesDiv.className = 'item-carrito-controles';

                const btnMenos = document.createElement('button');
                btnMenos.textContent = '-';
                btnMenos.className = 'item-carrito-btn';

                const cantidadInput = document.createElement('input');
                cantidadInput.type = 'number';
                cantidadInput.value = item.cantidad;
                cantidadInput.min = '1';
                cantidadInput.className = 'item-carrito-cantidad';

                const btnMas = document.createElement('button');
                btnMas.textContent = '+';
                btnMas.className = 'item-carrito-btn';

                const subtotal = document.createElement('div');
                subtotal.textContent = `$${(item.precio * item.cantidad).toLocaleString('es-CO')} COP`;
                subtotal.className = 'item-carrito-subtotal';

                const btnEliminar = document.createElement('button');
                btnEliminar.innerHTML = '🗑️';
                btnEliminar.className = 'item-carrito-eliminar';

                controlesDiv.appendChild(btnMenos);
                controlesDiv.appendChild(cantidadInput);
                controlesDiv.appendChild(btnMas);

                productoDiv.appendChild(imagenDiv);
                productoDiv.appendChild(infoDiv);
                productoDiv.appendChild(controlesDiv);
                productoDiv.appendChild(subtotal);
                productoDiv.appendChild(btnEliminar);

                productosContainer.appendChild(productoDiv);

                // Event listeners
                btnMenos.addEventListener('click', () => {
                    this.actualizarCantidad(item.id, item.cantidad - 1);
                });

                btnMas.addEventListener('click', () => {
                    this.actualizarCantidad(item.id, item.cantidad + 1);
                });

                cantidadInput.addEventListener('change', (e) => {
                    this.actualizarCantidad(item.id, parseInt(e.target.value));
                });

                btnEliminar.addEventListener('click', () => {
                    this.eliminarProducto(item.id);
                });
            });
        }

        // Actualizar total
        totalPrecio.textContent = `$${this.calcularTotal().toLocaleString('es-CO')} COP`;
    }

    // Mostrar modal del carrito
    mostrarModal() {
        const modal = document.getElementById('modalCarrito');
        if (modal) {
            this.actualizarVistaCarrito();
            modal.style.display = 'block';
            document.body.classList.add('body-sin-scroll'); // Prevenir scroll del body
        }
    }

    // Cerrar modal del carrito
    cerrarModal() {
        const modal = document.getElementById('modalCarrito');
        if (modal) {
            modal.style.display = 'none';
            document.body.classList.remove('body-sin-scroll'); // Restaurar scroll del body
        }
    }

    // Vaciar carrito
    vaciarCarrito() {
        if (this.carrito.length === 0) return;

        if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
            this.carrito = [];
            this.guardarCarrito();
            this.mostrarNotificacion('Carrito vaciado');
        }
    }

    // Realizar compra
    realizarCompra() {
        if (this.carrito.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }

        const total = this.calcularTotal();
        
        // Crear mensaje de WhatsApp
        let mensaje = '¡Hola! Estoy interesad@ en realizar la siguiente compra:%0A%0A';
        
        // Agregar productos al mensaje
        this.carrito.forEach((item, index) => {
            const subtotal = item.precio * item.cantidad;
            mensaje += `*${index + 1}. ${item.nombre}*%0A`;
            mensaje += `Cantidad: ${item.cantidad}%0A`;
            mensaje += `Precio unitario: $${item.precio.toLocaleString('es-CO')}%0A`;
            mensaje += `Subtotal: $${subtotal.toLocaleString('es-CO')}%0A%0A`;
        });
        
        // Agregar total
        mensaje += `*TOTAL: $${total.toLocaleString('es-CO')} COP*%0A%0A`;
        mensaje += 'Por favor, confírmame la disponibilidad y la forma de pago. ¡Gracias! 💜';
        
        // Número de WhatsApp de la tienda
        const telefono = '573137125763'; // Número de WhatsApp de la tienda
        
        // Crear enlace de WhatsApp
        const urlWhatsApp = `https://wa.me/${telefono}?text=${mensaje}`;
        
        // Abrir enlace en una nueva pestaña
        window.open(urlWhatsApp, '_blank');
        
        // Limpiar carrito después de la compra
        this.carrito = [];
        this.guardarCarrito();
        this.cerrarModal();
    }

    // Mostrar notificación
    mostrarNotificacion(mensaje) {
        // Crear notificación
        const notificacion = document.createElement('div');
        notificacion.textContent = mensaje;
        notificacion.className = 'notificacion-carrito';

        document.body.appendChild(notificacion);

        // Remover después de 3 segundos
        setTimeout(() => {
            notificacion.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notificacion.remove();
            }, 300);
        }, 3000);
    }

    // Agregar event listeners
    agregarEventListeners() {
        const iconoCarro = document.querySelector('.carro');
        if (iconoCarro) {
            iconoCarro.addEventListener('click', () => {
                this.mostrarModal();
            });
        }
    }

    // Método público para agregar productos desde botones externos
    // Uso: carrito.agregarProducto('prod1', 'Producto 1', 25.99, 'ruta/imagen.jpg')
}

// Inicializar carrito cuando el DOM esté listo
let carrito;

document.addEventListener('DOMContentLoaded', () => {
    carrito = new CarritoCompras();

    // Exponer carrito globalmente para uso desde otros scripts
    window.carrito = carrito;
});

