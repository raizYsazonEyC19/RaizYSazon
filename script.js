// =============================
// RAÍZ Y SAZÓN
// Mostrar productos
// =============================

const contenedor = document.getElementById("productos");
const buscador = document.getElementById("buscar");
const btnWhatsapp = document.getElementById("btnWhatsapp");

// Número de WhatsApp
const telefono = "12819009344";

function mostrarProductos(lista){

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        contenedor.innerHTML += `
            <div class="card">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p><strong>${producto.categoria}</strong></p>

                <p>${producto.descripcion}</p>

                <button onclick="pedirProducto('${producto.nombre}')">
                    💬 Cotizar por WhatsApp
                </button>

            </div>
        `;

    });

}

function pedirProducto(nombre){

    const mensaje = encodeURIComponent(
        `Hola 👋, me interesa cotizar el producto: ${nombre}. ¿Podrían darme información sobre presentaciones y precio?`
    );

    window.open(
        `https://wa.me/${telefono}?text=${mensaje}`,
        "_blank"
    );

}

btnWhatsapp.addEventListener("click", function(e){

    e.preventDefault();

    window.open(
        `https://wa.me/${telefono}`,
        "_blank"
    );

});

buscador.addEventListener("input", function(){

    const texto = this.value.toLowerCase();

    const resultado = productos.filter(producto =>

        producto.nombre.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto)

    );

    mostrarProductos(resultado);

});

mostrarProductos(productos);
