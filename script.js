// ======================================
// RAÍZ Y SAZÓN
// Mostrar productos automáticamente
// ======================================

const contenedor = document.getElementById("productos");

function mostrarProductos(lista){

    contenedor.innerHTML="";

    lista.forEach(producto=>{

        contenedor.innerHTML += `

        <div class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>${producto.categoria}</p>

            <strong>${producto.precio}</strong>

            <button onclick="pedirProducto('${producto.nombre}')">

                Pedir por WhatsApp

            </button>

        </div>

        `;

    });

}

function pedirProducto(nombre){

    const mensaje =
`https://wa.me/?text=Hola 😊, me interesa cotizar el producto: ${encodeURIComponent(nombre)}`;

    window.open(mensaje,"_blank");

}

mostrarProductos(productos);

// ===========================
// Buscador
// ===========================

const buscador=document.getElementById("buscar");

buscador.addEventListener("keyup",()=>{

const texto=buscador.value.toLowerCase();

const resultado=productos.filter(producto=>

producto.nombre.toLowerCase().includes(texto)

);

mostrarProductos(resultado);

});
