// Productos - Cana's amor hecho arte

// Lista de productos con nombres basados en los nombres originales de las imágenes
const productos = [
    { id: 'prod-1', nombre: 'img-001.jpeg', precio: 15000, imagen: 'https://luzeromero.github.io/Imagenes/img-001.jpeg', descripcion: 'Elegantes aretes artesanales con diseño único que combinan estilo y comodidad.', materiales: 'Acero quirúrgico, mostacillas de vidrio' },
    { id: 'prod-2', nombre: 'img-002.jpeg', precio: 18000, imagen: 'https://luzeromero.github.io/Imagenes/img-002.jpeg', descripcion: 'Aretes modernos con contraste de colores que resaltan tu personalidad.', materiales: 'Acero quirúrgico, mostacillas miyuki' },
    { id: 'prod-3', nombre: 'img-003.jpeg', precio: 20000, imagen: 'https://luzeromero.github.io/Imagenes/img-003.jpeg', descripcion: 'Aretes largos elegantes perfectos para ocasiones especiales.', materiales: 'Acero quirúrgico, cristales, mostacillas' },
    { id: 'prod-4', nombre: 'img-004.png', precio: 17000, imagen: 'https://luzeromero.github.io/Imagenes/img-004.png', descripcion: 'Aretes con diseño distintivo que añaden un toque de sofisticación.', materiales: 'Acero quirúrgico, mostacillas de colores' },
    { id: 'prod-5', nombre: 'img-005.jpeg', precio: 19000, imagen: 'https://luzeromero.github.io/Imagenes/img-005.jpeg', descripcion: 'Aretes con anillo multicolor que combinan diferentes estilos.', materiales: 'Acero quirúrgico, mostacillas multicolor' },
    { id: 'prod-6', nombre: 'img-006.jpeg', precio: 35000, imagen: 'https://luzeromero.github.io/Imagenes/img-006.jpeg', descripcion: 'Set completo de aretes y pulsera coordinados para un look armonioso.', materiales: 'Acero quirúrgico, mostacillas de vidrio, cristales' },
    { id: 'prod-7', nombre: 'img-007.png', precio: 25000, imagen: 'https://luzeromero.github.io/Imagenes/img-007.png', descripcion: 'Pulsera delicada con tonos azul celeste que complementa cualquier outfit.', materiales: 'Hilo de nylon, mostacillas de vidrio, cierre metálico' },
    { id: 'prod-8', nombre: 'img-008.jpeg', precio: 28000, imagen: 'https://luzeromero.github.io/Imagenes/img-008.jpeg', descripcion: 'Pulsera con detalle de estrella en azul marino, ideal para el día a día.', materiales: 'Hilo de nylon, mostacillas miyuki, charm de estrella' },
    { id: 'prod-9', nombre: 'img-009.jpeg', precio: 22000, imagen: 'https://luzeromero.github.io/Imagenes/img-009.jpeg', descripcion: 'Pulsera blanca minimalista que se adapta a cualquier estilo.', materiales: 'Hilo de algodón, mostacillas blancas, cierre ajustable' },
    { id: 'prod-10', nombre: 'img-010.jpeg', precio: 30000, imagen: 'https://luzeromero.github.io/Imagenes/img-010.jpeg', descripcion: 'Pulsera elegante con estrella dorada que añade un toque de lujo.', materiales: 'Hilo de nylon, mostacillas blancas, charm dorado' },
    { id: 'prod-11', nombre: 'img-011.jpeg', precio: 26000, imagen: 'https://luzeromero.github.io/Imagenes/img-011.jpeg', descripcion: 'Pulsera colorida que combina blanco con diversos tonos vibrantes.', materiales: 'Hilo de nylon, mostacillas multicolor, cierre metálico' },
    { id: 'prod-12', nombre: 'img-012.jpeg', precio: 24000, imagen: 'https://luzeromero.github.io/Imagenes/img-012.jpeg', descripcion: 'Pulsera con diseño alegre que combina múltiples colores.', materiales: 'Hilo de nylon, mostacillas de vidrio multicolor' },
    { id: 'prod-13', nombre: 'img-013.jpeg', precio: 27000, imagen: 'https://luzeromero.github.io/Imagenes/img-013.jpeg', descripcion: 'Pulsera con tonos tierra que aporta un estilo natural y bohemio.', materiales: 'Hilo de algodón, mostacillas en tonos tierra' },
    { id: 'prod-14', nombre: 'img-014.jpeg', precio: 32000, imagen: 'https://luzeromero.github.io/Imagenes/img-014.jpeg', descripcion: 'Pulsera sofisticada con cristales negro y rosa, incluye borla decorativa.', materiales: 'Hilo de nylon, cristales, borla de hilo, cierre metálico' },
    { id: 'prod-15', nombre: 'img-015.jpeg', precio: 35000, imagen: 'https://luzeromero.github.io/Imagenes/img-015.jpeg', descripcion: 'Pulsera dorada elegante con detalles en mostacillas azules.', materiales: 'Hilo dorado, mostacillas azules, cierre metálico' },
    { id: 'prod-16', nombre: 'img-016.jpeg', precio: 29000, imagen: 'https://luzeromero.github.io/Imagenes/img-016.jpeg', descripcion: 'Pulsera multicolor vibrante que expresa personalidad y alegría.', materiales: 'Hilo de nylon, mostacillas de vidrio multicolor' },
    { id: 'prod-17', nombre: 'img-017.jpeg', precio: 33000, imagen: 'https://luzeromero.github.io/Imagenes/img-017.jpeg', descripcion: 'Pulsera negra con acento turquesa miyuki que destaca por su elegancia.', materiales: 'Hilo de nylon negro, mostacillas miyuki turquesa' },
    { id: 'prod-18', nombre: 'img-018.jpeg', precio: 31000, imagen: 'https://luzeromero.github.io/Imagenes/img-018.jpeg', descripcion: 'Pulsera negra con cristales que refleja luz y sofisticación.', materiales: 'Hilo de nylon negro, cristales, cierre metálico' },
    { id: 'prod-19', nombre: 'img-019.jpeg', precio: 28000, imagen: 'https://luzeromero.github.io/Imagenes/img-019.jpeg', descripcion: 'Pulsera roja festiva perfecta para ocasiones especiales y celebraciones.', materiales: 'Hilo de nylon rojo, mostacillas de vidrio, cierre metálico' },
    { id: 'prod-20', nombre: 'img-020.jpeg', precio: 23000, imagen: 'https://luzeromero.github.io/Imagenes/img-020.jpeg', descripcion: 'Pulsera rosa delicada que añade un toque femenino y suave.', materiales: 'Hilo de nylon rosa, mostacillas de vidrio' },
    { id: 'prod-21', nombre: 'img-021.jpeg', precio: 30000, imagen: 'https://luzeromero.github.io/Imagenes/img-021.jpeg', descripcion: 'Pulsera tejida con técnica artesanal en tonos tierra naturales.', materiales: 'Hilo de algodón, técnica de tejido, mostacillas en tonos tierra' },
    { id: 'prod-22', nombre: 'img-022.jpeg', precio: 38000, imagen: 'https://luzeromero.github.io/Imagenes/img-022.jpeg', descripcion: 'Pulsera premium con acero y mostacillas miyuki turquesa de alta calidad.', materiales: 'Acero quirúrgico, mostacillas miyuki turquesa, cierre de acero' },
    { id: 'prod-23', nombre: 'img-023.jpeg', precio: 29000, imagen: 'https://luzeromero.github.io/Imagenes/img-023.jpeg', descripcion: 'Pulsera con diseño azul y blanco que incluye borlas decorativas.', materiales: 'Hilo de nylon, mostacillas azules y blancas, borlas' },
    { id: 'prod-24', nombre: 'img-024.jpeg', precio: 26000, imagen: 'https://luzeromero.github.io/Imagenes/img-024.jpeg', descripcion: 'Pulsera clásica en azul y blanco que combina con todo tipo de outfits.', materiales: 'Hilo de nylon, mostacillas azules y blancas, cierre metálico' },
    { id: 'prod-25', nombre: 'img-025.jpeg', precio: 40000, imagen: 'https://luzeromero.github.io/Imagenes/img-025.jpeg', descripcion: 'Set de pulseras de presentación con variedad de estilos y colores.', materiales: 'Hilo de nylon, mostacillas de vidrio, cristales, cierres metálicos' },
    { id: 'prod-26', nombre: 'img-026.jpeg', precio: 35000, imagen: 'https://luzeromero.github.io/Imagenes/img-026.jpeg', descripcion: 'Producto especial con diseño exclusivo y materiales de primera calidad.', materiales: 'Materiales premium, mostacillas de alta calidad, acabado artesanal' },
    { id: 'prod-27', nombre: 'img-027.jpeg', precio: 37000, imagen: 'https://luzeromero.github.io/Imagenes/img-027.jpeg', descripcion: 'Producto especial con acabado refinado y atención al detalle.', materiales: 'Materiales selectos, técnica artesanal avanzada, acabado profesional' }
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
