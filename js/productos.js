// Productos - Cana's amor hecho arte

// Lista de productos con nombres basados en los nombres originales de las imágenes
const productos = [
    { id: 'prod-1', nombre: 'Aretes azules ', precio: 25000, imagen: 'Imagenes/img-001.jpeg', descripcion: 'Elegantes aretes artesanales con diseño único que combinan estilo y comodidad.', materiales: 'Acero , Miyuki' },
    { id: 'prod-2', nombre: 'Aretes Espejito Nocturna', precio: 18000, imagen: 'Imagenes/img-002.jpeg', descripcion: 'Aretes modernos con contraste de colores que resaltan tu personalidad.', materiales: 'Acero , Miyuki' },
    { id: 'prod-3', nombre: 'Aretes Colaespada ', precio: 20000, imagen: 'Imagenes/img-003.jpeg', descripcion: 'Aretes largos elegantes perfectos para ocasiones especiales.', materiales: 'Acero , Miyuki' },
    { id: 'prod-4', nombre: 'Aretes Violeta Monarca', precio: 17000, imagen: 'Imagenes/img-004.png', descripcion: 'Aretes con diseño distintivo que añaden un toque de sofisticación.', materiales: 'Acero, miyuki de colores' },
    { id: 'prod-5', nombre: 'Aretes y anillo Blanca Amazónica', precio: 19000, imagen: 'Imagenes/img-005.jpeg', descripcion: 'Aretes con anillo multicolor que combinan diferentes estilos.', materiales: 'Acero, miyuki multicolor' },
    { id: 'prod-6', nombre: 'Aretes y pulsera morpho butterfly', precio: 35000, imagen: 'Imagenes/img-006.jpeg', descripcion: 'Set completo de aretes y pulsera coordinados para un look armonioso.', materiales: 'Acero, miyuki' },
    { id: 'prod-7', nombre: 'Aretes marca de metal', precio: 25000, imagen: 'Imagenes/img-007.jpeg', descripcion: 'Pulsera delicada con tonos azul celeste que complementa cualquier outfit.', materiales: 'Acero,miyuki multicolor' },
    { id: 'prod-8', nombre: 'Pulsera golondrina azul', precio: 28000, imagen: 'Imagenes/img-008.jpeg', descripcion: 'Pulsera con detalle de estrella en azul marino, ideal para el día a día.', materiales: 'Hilo de nylon, miyuki, charm de estrella' },
    { id: 'prod-9', nombre: 'Pulsera turquesa', precio: 22000, imagen: 'Imagenes/img-009.jpeg', descripcion: 'Pulsera azul minimalista que se adapta a cualquier estilo.', materiales: 'Miyuki,Accesorios en acero y cierre ajustable' },
    { id: 'prod-10', nombre: 'Pulsera blanca', precio: 30000, imagen: 'Imagenes/img-010.jpeg', descripcion: 'Pulsera elegante con  dorado que añade un toque de lujo.', materiales: 'Miyuki blanco,' },
    { id: 'prod-11', nombre: 'Pulsera Blanca y Dorada', precio: 26000, imagen: 'Imagenes/img-011.jpeg', descripcion: 'Pulsera elegante con estrella dorada que añade un toque de lujo.', materiales: 'Miyuki blanco y dorado' },
    { id: 'prod-12', nombre: 'Pulsera multicolor', precio: 24000, imagen: 'Imagenes/img-012.jpeg', descripcion: 'Pulsera con diseño alegre que combina múltiples colores.', materiales: 'Miyuki multicolor,multicolor, cierre ajustable' },
    { id: 'prod-13', nombre: 'Pulsera colores', precio: 27000, imagen: 'Imagenes/img-013.jpeg', descripcion: 'pulsera de tonos alegres y elegantes.', materiales: 'miyuki de colores, cierre ajustable' },
    { id: 'prod-14', nombre: 'Pulsera', precio: 32000, imagen: 'Imagenes/img-014.jpeg', descripcion: 'Pulsera con tonos tierra que aporta un estilo natural y bohe.', materiales: 'miyuki y cierre ajustable ' },
    { id: 'prod-15', nombre: 'Pulsera', precio: 35000, imagen: 'Imagenes/img-015.jpeg', descripcion: 'Pulsera dorada elegante con detalles en mostacillas azules.', materiales: 'Hilo negro, miyuki azul, cierre ajustable' },
    { id: 'prod-16', nombre: 'Pulsera gris y azul', precio: 29000, imagen: 'Imagenes/img-016.jpeg', descripcion: 'Pulsera elegante con miyuki azul .', materiales: 'Hilo ajustable, Miyuki' },
    { id: 'prod-17', nombre: 'Pulsera', precio: 33000, imagen: 'Imagenes/img-017.jpeg', descripcion: 'Pulsera negra con acento turquesa miyuki que destaca por su elegancia.', materiales: 'Hilo de nylon negro, miyuki turquesa' },
    { id: 'prod-18', nombre: 'Pulsera Negro azul', precio: 31000, imagen: 'Imagenes/img-018.jpeg', descripcion: '****************', materiales: 'Cilindro de miyuki azul, cierre metálico' },
    { id: 'prod-19', nombre: 'Pulsera Negra', precio: 28000, imagen: 'Imagenes/img-019.jpeg', descripcion: 'Pulsera negra con cristales que refleja luz y sofisticación. .', materiales: 'Hilo de Nylon negro y piedras' },
    { id: 'prod-20', nombre: 'Pulsera Roja', precio: 23000, imagen: 'Imagenes/img-020.jpeg', descripcion: 'pulsera roja, con cilindro de de colores elegante .', materiales: 'Hilo de nylon rojo, cilindro en miyuki, cierre metálico' },
    { id: 'prod-21', nombre: 'Pulsera Rosa ', precio: 30000, imagen: 'Imagenes/img-021.jpeg', descripcion: 'pulsera rosa', materiales: 'Hilo de nylon rosa, cilindro de miyuki en piedaras de colores ' },
    { id: 'prod-22', nombre: 'Pulsera Tejida ', precio: 38000, imagen: 'Imagenes/img-022.jpeg', descripcion: 'pulsera tejida en miyuki de tonos tierra.', materiales: 'Miyuki, hilo con cierre ajustable' },
    { id: 'prod-23', nombre: 'Pulsera Azul turquesa', precio: 29000, imagen: 'Imagenes/img-023.jpeg', descripcion: 'Pulsera elegante con tonos azules.', materiales: 'cilindro en Miyuki y acero' },
    { id: 'prod-24', nombre: 'Pulsera Elegant', precio: 26000, imagen: 'Imagenes/img-024.jpeg', descripcion: 'Pulsera con diseño azul y blanco que incluye borlas decorativas.', materiales: 'Hilo de nylon, piedras azules y blancas, cierre metálico' },
    { id: 'prod-25', nombre: 'Pulsera Blanca Azul', precio: 40000, imagen: 'Imagenes/img-025.jpeg', descripcion: 'Pulsera clásica en azul y blanco que combina con todo tipo de outfits.', materiales: 'Hilo de nylon, cilindros de Miyuki, cierres ajustable' },
    { id: 'prod-26', nombre: 'Aretes Dorado & Azul', precio: 37000, imagen: 'Imagenes/img-027.jpeg', descripcion: 'Producto especial con acabado refinado y atención al detalle.', materiales: 'Materiales selectos, técnica artesanal avanzada, acabado profesional' }
];

// Función para crear una tarjeta de producto
function crearProductoCard(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.style.cursor = 'pointer';
    
    // Hacer toda la card clickeable para abrir el modal
    card.addEventListener('click', () => {
        abrirModalProducto(producto);
    });

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.className = 'producto-imagen';
    imagen.onerror = function () {
        this.src = '/Imagenes/IMG-001.jpeg'; // Imagen de respaldo si falla
    };

    const info = document.createElement('div');
    info.className = 'producto-info';

    const nombre = document.createElement('h3');
    nombre.className = 'producto-nombre';
    nombre.textContent = producto.nombre;

    const precio = document.createElement('div');
    precio.className = 'producto-precio';
    precio.textContent = `$${producto.precio.toLocaleString('es-CO')} COP`;

    // Agregar elementos en el orden correcto (solo nombre y precio)
    info.appendChild(nombre);
    info.appendChild(precio);

    card.appendChild(imagen);
    card.appendChild(info);

    return card;
}

// Función para abrir el modal del producto
function abrirModalProducto(producto) {
    const modal = document.getElementById('modalProducto');
    if (!modal) return;

    // Llenar el modal con la información del producto
    modal.querySelector('.modal-producto-imagen').src = producto.imagen;
    modal.querySelector('.modal-producto-imagen').alt = producto.nombre;
    modal.querySelector('.modal-producto-nombre').textContent = producto.nombre;
    modal.querySelector('.modal-producto-precio').textContent = `$${producto.precio.toLocaleString('es-CO')} COP`;
    
    const descripcionEl = modal.querySelector('.modal-producto-descripcion');
    if (producto.descripcion) {
        descripcionEl.textContent = producto.descripcion;
        descripcionEl.style.display = 'block';
    } else {
        descripcionEl.style.display = 'none';
    }

    const materialesEl = modal.querySelector('.modal-producto-materiales');
    if (producto.materiales) {
        materialesEl.innerHTML = `<strong>Materiales:</strong> ${producto.materiales}`;
        materialesEl.style.display = 'block';
    } else {
        materialesEl.style.display = 'none';
    }

    // Resetear cantidad a 1
    const cantidadInput = modal.querySelector('.modal-cantidad-input');
    cantidadInput.value = 1;

    // Actualizar el botón de agregar al carrito
    const botonAgregar = modal.querySelector('.modal-boton-agregar');
    botonAgregar.onclick = () => {
        const cantidad = parseInt(cantidadInput.value) || 1;
        if (window.carrito) {
            window.carrito.agregarProducto(
                producto.id,
                producto.nombre,
                producto.precio,
                producto.imagen,
                cantidad
            );
            cerrarModalProducto();
        } else {
            console.error('El carrito no está inicializado');
        }
    };

    // Mostrar el modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function cerrarModalProducto() {
    const modal = document.getElementById('modalProducto');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Función para inicializar los productos
function inicializarProductos() {
    const productosGrid = document.getElementById('productosGrid');

    if (!productosGrid) {
        console.error('No se encontró el contenedor de productos');
        return;
    }

    // Limpiar el contenedor
    productosGrid.innerHTML = '';

    // Crear y agregar cada producto
    productos.forEach(producto => {
        const card = crearProductoCard(producto);
        productosGrid.appendChild(card);
    });
}

// Inicializar productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar a que el carrito esté inicializado
    const checkCarrito = setInterval(() => {
        if (window.carrito) {
            clearInterval(checkCarrito);
            inicializarProductos();
        }
    }, 100);

    // Timeout de seguridad
    setTimeout(() => {
        clearInterval(checkCarrito);
        inicializarProductos();
    }, 2000);

    // Configurar eventos del modal
    const modal = document.getElementById('modalProducto');
    if (modal) {
        // Cerrar modal al hacer clic en el fondo
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                cerrarModalProducto();
            }
        });

        // Cerrar modal con el botón X
        const botonCerrar = modal.querySelector('.modal-cerrar');
        if (botonCerrar) {
            botonCerrar.addEventListener('click', cerrarModalProducto);
        }

        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                cerrarModalProducto();
            }
        });

        // Control de cantidad
        const btnMenos = modal.querySelector('.modal-cantidad-menos');
        const btnMas = modal.querySelector('.modal-cantidad-mas');
        const cantidadInput = modal.querySelector('.modal-cantidad-input');

        if (btnMenos && btnMas && cantidadInput) {
            btnMenos.addEventListener('click', () => {
                const valor = parseInt(cantidadInput.value) || 1;
                if (valor > 1) {
                    cantidadInput.value = valor - 1;
                }
            });

            btnMas.addEventListener('click', () => {
                const valor = parseInt(cantidadInput.value) || 1;
                cantidadInput.value = valor + 1;
            });

            cantidadInput.addEventListener('change', () => {
                const valor = parseInt(cantidadInput.value) || 1;
                if (valor < 1) {
                    cantidadInput.value = 1;
                }
            });
        }
    }
});
