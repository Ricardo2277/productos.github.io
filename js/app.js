const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('.iteams');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);
     vaciarCarritoBtn.addEventListener('click',vaciarCarrito)
     crearHTML()
}

function agregarProducto(e) {
    e.preventDefault();
    // Delegation para agregar-carrito
    if(e.target.classList.contains('agregar')) {
         const producto = e.target.parentElement.parentElement.parentElement.parentElement;
         console.log(producto)
         // Enviamos el curso seleccionado para tomar sus datos
         const img=producto.children[0].children[0].children[0]
         console.log(img.src)

         const nombre=producto.children[0].children[2].children[0]
         console.log(nombre.textContent)

         const precio=producto.children[0].children[2].children[4]
         console.log(precio.textContent)

         const objCarrito={
            id:Date.now(),
            imagen:img.src,
            nombre:nombre.textContent,
            precio:precio.textContent
  }
       articulosCarrito=[...articulosCarrito,objCarrito]
       crearHTML()
       console.log(articulosCarrito)
    }
}

function crearHTML(){
    if(articulosCarrito.length>=0){
         limpiarHTML()
         articulosCarrito.forEach(card=>{
              const btnEliminar=document.createElement('a')
              btnEliminar.classList.add('borrar');
              btnEliminar.textContent='X'
              btnEliminar.onclick=()=>{
              borrarCarrito(card.id)
              }
              const tr=document.createElement('tr')
              tr.innerHTML=`
              <th><img src='${card.imagen}' width=100></th>
              <th>${card.nombre}</th>
              <th>${card.precio}</th>
              <th>1</th>
              <th>${btnEliminar}</th>`;
              //tr.appendChild(btnEliminar)
              contenedorCarrito.appendChild(tr)
         })
    }
} 


function limpiarHTML(){
    while(contenedorCarrito.firstChild){
         contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function vaciarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
   }
}
