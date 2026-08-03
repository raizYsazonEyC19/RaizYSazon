// ===============================
// RAÍZ Y SAZÓN
// Script principal
// ===============================

const productos = document.getElementById("productos");

const listaProductos = [

{
nombre:"Chile Guajillo",
categoria:"Chiles",
imagen:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
},

{
nombre:"Canela",
categoria:"Especias",
imagen:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
},

{
nombre:"Orégano",
categoria:"Hierbas",
imagen:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
}

];

listaProductos.forEach(producto=>{

productos.innerHTML += `

<div class="card">

<img src="${producto.imagen}" alt="${producto.nombre}">

<h3>${producto.nombre}</h3>

<p>${producto.categoria}</p>

<button>Solicitar</button>

</div>

`;

});
